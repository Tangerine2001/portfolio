import os
import json
from dataclasses import dataclass, asdict

import markdown2


@dataclass
class Problem:
    title: str
    description: str
    pno: str
    difficulty: str
    solved_languages: list
    solutions_per_language: int

    def __repr__(self):
        return (f"Problem(title={self.title}, description={self.description[:20]}, "
                f"difficulty={self.difficulty}, languages={self.solved_languages}, "
                f"solutions_per_language={self.solutions_per_language})")

    def dict(self):
        return asdict(self)


def compile_backend() -> tuple[list, list]:
    problems = []
    all_solutions = []
    for potential_problem in os.listdir("leetcode"):
        path = f"leetcode/{potential_problem}"
        print(f"Checking {path}...")

        if not os.path.exists(f"{path}/info.json"):
            print(f"Skipping {path} because it doesn't have an info.json file.")
            continue
        print(f"{path} has info.json. Compiling into Problem dataclass")

        problem: Problem
        with open(f"{path}/info.json", "r") as f:
            problem = Problem(**eval(f.read()), pno=potential_problem, solved_languages=[], solutions_per_language=-1)

        solutions, problem.solutions_per_language = compile_languages(path)
        problem.solved_languages = [language for language in solutions.keys()]
        if len(problem.solved_languages) == 0:
            print(f"Skipping {path} because it doesn't have the expected number of solutions.")
            continue
        print(problem)

        problems.append(problem)
        all_solutions.append(solutions)
    return problems, all_solutions


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


def compile_markdowns(markdown_file_path: str):
    with open(markdown_file_path, 'r') as file:
        text = file.readlines()
    text = markdown2.markdown("".join(text))
    return text


def main():
    if not os.path.exists("./leetcode"):
        print("Path ./leetcode does not exist.")
        return

    problems, solutions = compile_backend()

    if not os.path.exists("./leetcode/problem_info"):
        os.mkdir("./leetcode/problem_info")
    if not os.path.exists("./leetcode/problem_solutions"):
        os.mkdir("./leetcode/problem_solutions")

    all_problems = []
    for problem, solution in zip(problems, solutions):
        all_problems.append(problem.dict())
        pno = problem.pno

        if not os.path.exists(f"./leetcode/{pno}/{pno}.md"):
            continue

        text = {"html": compile_markdowns(f"./leetcode/{pno}/{pno}.md"), "solutions": solution}
        with open(f"./leetcode/problem_solutions/{problem.pno}_solution.json", "w") as f:
            f.write(json.dumps(text, indent=4))
    # all_problems = []
    # for
    # problems = {
    #     'problems': [problem.dict() for problem in compile_backend()]
    # }

    with open("all_problems.json", "w") as f:
        f.write(json.dumps({"problems": all_problems}, indent=4))


if __name__ == '__main__':
    main()