import json
import os
import re
import markdown2


def compile_markdowns(markdown_file_path: str):
    # curr_path = "./leetcode"
    # if not os.path.exists(curr_path):
    #     print(f"Path {curr_path} does not exist.")
    #     return
    #
    # for problem in os.listdir(curr_path):
    #     path = f"{curr_path}/{problem}"
    #     if not os.path.isdir(path):
    #         continue
    #
    #     readme_file_path = f"{path}/{problem}.md"
    #     if not os.path.exists(readme_file_path):
    #         continue

    with open(markdown_file_path, 'r') as file:
        text = file.readlines()
    text = markdown2.markdown("".join(text))
    return text

        # if not os.path.exists(f"./leetcode/problem_solution_page"):
        #     os.makedirs(f"./leetcode/problem_solution_page")
        #
        # with open(f"./leetcode/problem_solution_page/{problem}_solution_page.json", "w") as out_file:
        #     out_file.write(json.dumps({"html": text}, indent=4))

        # with open(f"leetcode/problem_solution_page/{problem}.html", "w") as out_file:
        #     out_file.write(text)
