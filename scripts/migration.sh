echo -e "\e[45m--- Routine: migration.sh\e[49m"

MAKEMIGRATIONS_PATH="$(dirname "$0")/backend/makemigrations.sh"
MIGRATE_PATH="$(dirname "$0")/backend/migrate.sh"

source "$MAKEMIGRATIONS_PATH"
source "$MIGRATE_PATH"
