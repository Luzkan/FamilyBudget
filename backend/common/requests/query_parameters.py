
from __future__ import annotations

import logging
from dataclasses import dataclass
from typing import Any


@dataclass
class QueryParameters:

    @classmethod
    def get_parameter(
        cls,
        query_parameters: dict[str, list],
        parameter_name: str,
        cast_type: type,
        bad_type_return: Any = None
    ) -> Any:
        if parameter_name not in query_parameters:
            return None
        if not isinstance(query_parameters[parameter_name], str) or query_parameters[parameter_name] == "":
            return None
        try:
            if cast_type == int:
                return cast_type(query_parameters[parameter_name][0])
            return cast_type(query_parameters[parameter_name])
        except ValueError:
            logging.warn(f"Could not cast query parameter '{parameter_name}' to type '{cast_type}'")
            return bad_type_return
