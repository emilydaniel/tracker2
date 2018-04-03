# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :tracker2,
  ecto_repos: [Tracker2.Repo]

# Configures the endpoint
config :tracker2, Tracker2Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "MBYS46REl/eOCEGiGPHtB31KQI8oY/tyOUfUPzP+4kvBC9Xx+l8kNwgZ2roFnBw2",
  render_errors: [view: Tracker2Web.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Tracker2.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
