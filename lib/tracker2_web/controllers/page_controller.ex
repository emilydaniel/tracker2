defmodule Tracker2Web.PageController do
  use Tracker2Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
