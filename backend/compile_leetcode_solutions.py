import os
import json
from dataclasses import dataclass, asdict


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
#         print(f"Checking {path}...")

        if not os.path.exists(f"{path}/info.json"):
            print(f"Skipping {path} because it doesn't have an info.json file.")
            continue
#         print(f"{path} has info.json. Compiling into Problem dataclass")

        problem: Problem
        with open(f"{path}/info.json", "r") as f:
            problem = Problem(**eval(f.read()), pno=potential_problem, solved_languages=[], solutions_per_language=-1)

        solutions, problem.solved_languages, problem.solutions_per_language = compile_languages(path)
        if len(problem.solved_languages) == 0:
            print(f"Skipping {path} because it doesn't have the expected number of solutions.")
            continue
        print(problem)

        problems.append(problem)
        all_solutions.append(solutions)
    return problems, all_solutions


def compile_languages(path) -> tuple[dict, list, int]:
    info = dict()
    expected_solution_count = -1

    supported_languages = ["python", "java", "c++", "go", "rust"]
    for language in supported_languages:
        curr_path = f"{path}/{language}"
#         print(f"Checking {curr_path}...")

        if not os.path.exists(f"{curr_path}"):
#             print(f"Skipping {curr_path} because it doesn't have a {language} directory.")
            continue

        if not os.path.exists(f"{curr_path}/info.json"):
#             print(f"Skipping {curr_path} because it doesn't have a {language}/info.json file.")
            continue

        # Compile language
        print(f"{curr_path} has {language}/info.json. Compiling solutions")
        curr_language_solution = {}
        with open(f"{curr_path}/info.json", "r") as f:
            curr_language_solution[language] = eval(f.read())

        # Check that counts match expectations
        num_solutions = len(curr_language_solution[language].keys())
        print(f"{curr_path} has {num_solutions} solutions")

        if expected_solution_count == -1:
            expected_solution_count = num_solutions
        elif num_solutions != expected_solution_count:
            print(f"Skipping {curr_path} because it has {num_solutions} solutions, but we expected {expected_solution_count}")
            curr_language_solution.pop(language)
            return {}, [], -1
        
        info.update(curr_language_solution)

    res = {}
    solved_languages = set()
    for i in range(expected_solution_count):
        solution_str = f"solution{i + 1}"
        res[solution_str] = dict()
        for language in supported_languages:
            if language not in info:
                continue

            solved_languages.add(language)
            res[solution_str].update({language: info[language][solution_str]})

    return {"solutions": res}, list(solved_languages), expected_solution_count


def main():
    if not os.path.exists("./leetcode"):
        print("Path ./leetcode does not exist.")
        return

    problems, solutions = compile_backend()

    if not os.path.exists("./leetcode/problem_solutions"):
        os.mkdir("./leetcode/problem_solutions")

    all_problems = []
    for problem, solution in zip(problems, solutions):
        all_problems.append(problem.dict())
        pno = problem.pno

        components_file = f"./leetcode/{pno}/{pno}_components.json"
        if not os.path.exists(components_file):
            continue

        with open(components_file, "r") as f:
            components = json.load(f)

        solution.update(components)
        with open(f"./leetcode/problem_solutions/{problem.pno}_solution.json", "w") as f:
            f.write(json.dumps(solution, indent=4))

    with open("all_problems.json", "w") as f:
        f.write(json.dumps({"problems": all_problems}, indent=4))


if __name__ == '__main__':
    main()