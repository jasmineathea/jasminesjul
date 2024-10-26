import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";

export default function Snowfall() {
  const snowflakes = Array.from({ length: 14 }, (_, i) => i + 1); // Lager 14 snøfnugg

  return (
    <div className="snow w-full h-full absolute top-0 left-0 overflow-hidden pointer-events-none z-0">
      {snowflakes.map((n) => (
        <FontAwesomeIcon
          icon={faSnowflake}
          className={`snowflake snowflake${n} fa-snowflake`}
          key={n}
        />
      ))}
    </div>
  );
}
