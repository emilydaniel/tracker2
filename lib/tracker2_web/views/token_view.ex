#adapted from SPA microblog example by Nat Tuck

defmodule Tracker2Web.TokenView do
  use Tracker2Web, :view

  def render("token.json", %{user: user, token: token}) do
    %{
      user_id: user.id,
      user_name: user.name,
      token: token,
    }
  end
end
