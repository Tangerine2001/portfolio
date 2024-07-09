echo "Compiling backend"
echo "#############################################"
cd backend
python3 compile_backend.py
cd ..
cp backend/info.json frontend/src/data/problems.json
echo "#############################################"
echo "Backend compiled successfully"