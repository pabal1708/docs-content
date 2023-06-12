export default function NewRelicScript() {
  const src = `/js/newrelic.${process.env.NEW_RELIC_ENVIRONMENT}.js`;

  return <script async type="text/javascript" src={src} />;
}
