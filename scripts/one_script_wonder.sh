echo -e "\e[45m--- Routine: one_script_wonder.sh\e[49m"

INITIALIZE_PATH="$(dirname "$0")/initialize.sh"
MIGRATION_PATH="$(dirname "$0")/migration.sh"
UP_PATH="$(dirname "$0")/up.sh"
HISTORY_FIX_PATH="$(dirname "$0")/fix/history_module/injects_types.sh"

source "$INITIALIZE_PATH"
BACK_PID=$!
wait $BACK_PID

source "$MIGRATION_PATH"
BACK_PID=$!
wait $BACK_PID

source "$HISTORY_FIX_PATH"

source "$UP_PATH"
