#adapted from SPA Microblog example by Nat Tuck

defmodule Tracker2Web.TokenController do
  use Tracker2Web, :controller
  alias Tracker2.Users.User

  action_fallback Tracker2Web.FallbackController

  def create(conn, %{"name" => name, "pass" => "pass"}) do
    with {:ok, %User{} = user} <- Tracker2.Users.get_and_auth_user(name, pass) do
      token = Phoenix.Token.sign(conn, "auth token", user)
      conn
      |> put_status(:created)
      |> render("token.json", user: user, token: token)
    end
  end
end
