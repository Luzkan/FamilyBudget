echo -e "\e[45m--- Routine: pycache.sh\e[49m"

echo -e "\e[44m[CLEAN]\e[49m \e[33mRemoving all \e[36m__pycache__\e[33m and \e[36m*pyc\e[33m files\e[0m"
find . | grep -E "(__pycache__|\.pyc|\.pyo$)" | xargs rm -rf
