echo -e "\e[45m--- Routine: rebuild.sh\e[49m"

CLEAN_DOWN_PATH="$(dirname "$0")/clean/down.sh"
SETUP_PATH="$(dirname "$0")/setup.sh"
MIGRATION_PATH="$(dirname "$0")/migration.sh"
UP_PATH="$(dirname "$0")/up.sh"

source "$CLEAN_DOWN_PATH"
BACK_PID=$!
wait $BACK_PID

source "$SETUP_PATH"
BACK_PID=$!
wait $BACK_PID

source "$MIGRATION_PATH"
BACK_PID=$!
wait $BACK_PID

source "$UP_PATH"
