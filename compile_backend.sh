echo "Compiling backend"
echo "#############################################"
cd backend || exit
./venv/bin/python compile_leetcode_solutions.py
cd ..
cp backend/all_problems.json frontend/src/data/all_problems.json
cp -R backend/leetcode/problem_solutions/ frontend/src/data/problem_solutions/
echo "#############################################"
echo "Backend compiled successfully"