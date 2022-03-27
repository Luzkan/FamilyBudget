echo -e "\e[45m--- Routine: clean.sh\e[49m"

CLEAN_DOWN_PATH="$(dirname "$0")/clean/down.sh"
CLEAN_NODE_MODULES_PATH="$(dirname "$0")/clean/nodemodules.sh"
CLEAN_PYCACHE_PATH="$(dirname "$0")/clean/pycache.sh"

source "$CLEAN_DOWN_PATH"
source "$CLEAN_NODE_MODULES_PATH"
source "$SETUP_PATH"
BACK_PID=$!
wait $BACK_PID
