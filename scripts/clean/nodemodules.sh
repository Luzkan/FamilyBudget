echo -e "\e[45m--- Routine: nodemodules.sh\e[49m"

echo -e "\e[44m[CLEAN]\e[49m \e[33mRemoving all \e[36mnode_modules\e[33m (wherevery they are)\e[0m"
find . -name "node_modules" -type d -prune | xargs du -chs
