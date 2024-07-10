import os
import json
from dataclasses import dataclass, asdict

@dataclass
class Problem:
    title: str
    description: str
    difficulty: str
    languages: dict
    solutions_per_language: int

    def __repr__(self):
        return (f"Problem(title={self.title}, description={self.description[:20]}, "
                f"difficulty={self.difficulty}, solutions={list(self.languages.keys())}, "
                f"solutions_per_language={self.solutions_per_language})")

    def dict(self):
        return asdict(self)

def compile_backend():
    problems = []
    for potential_problem in os.listdir("leetcode"):
        path = f"leetcode/{potential_problem}"
        print(f"Checking {path}...")

        if not os.path.exists(f"{path}/info.json"):
            print(f"Skipping {path} because it doesn't have an info.json file.")
            continue
        print(f"{path} has info.json. Compiling into Problem dataclass")

        problem: Problem
        with open(f"{path}/info.json", "r") as f:
            problem = Problem(**eval(f.read()), languages={}, solutions_per_language=-1)

        problem.languages, problem.solutions_per_language = compile_languages(path)
        if len(problem.languages) == 0:
            print(f"Skipping {path} because it doesn't have the expected number of solutions.")
            continue
        print(problem)

        problems.append(problem)
    return problems

def compile_languages(path) -> tuple[dict, int]:
    info = dict()
    expected_solution_count = -1

    supported_languages = ["python", "java", "c++", "go", "rust"]
    for language in supported_languages:
        curr_path = f"{path}/{language}"
        print(f"Checking {curr_path}...")

        if not os.path.exists(f"{curr_path}"):
            print(f"Skipping {curr_path} because it doesn't have a {language} directory.")
            continue

        if not os.path.exists(f"{curr_path}/info.json"):
            print(f"Skipping {curr_path} because it doesn't have a {language}/info.json file.")
            continue

        # Compile language
        print(f"{curr_path} has {language}/info.json. Compiling solutions")
        with open(f"{curr_path}/info.json", "r") as f:
            info[language] = eval(f.read())

        # Check that counts match expectations
        num_solutions = len(info[language].keys())
        print(f"{curr_path} has {num_solutions} solutions")

        if expected_solution_count == -1:
            expected_solution_count = num_solutions
        elif num_solutions != expected_solution_count:
            print(f"Skipping {curr_path} because it has {num_solutions} solutions, but we expected {expected_solution_count}")
            info.pop(language)
            return {}, -1

    return info, expected_solution_count

def main():
    problems = {
        'problems': [problem.dict() for problem in compile_backend()]
    }

    with open("info.json", "w") as f:
        f.write(json.dumps(problems, indent=4))


if __name__ == '__main__':
    main()