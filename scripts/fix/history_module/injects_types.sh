echo -e "\e[45m--- Routine: injec_types.sh\e[49m"

echo -e "\e[44m[FIX]\e[49m \e[33m\e[36mHistory\e[33m module is broken.\e[0m"
echo -e "\e[44m[FIX]\e[49m \e[33mThis script will inject types definition into the package in node_modules.\e[0m"

cp ./scripts/fix/history_module/index.d.ts  ./frontend/node_modules/history
