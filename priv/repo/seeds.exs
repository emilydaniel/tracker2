# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Tracker2.Repo.insert!(%Tracker2.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias Tracker2.Repo
  alias Tracker2.Users.User
  alias Tracker2.Tasks.Task

  def run do
    Repo.delete_all(User)
    a = Repo.insert!(%User{ name: "Amy" })
    b = Repo.insert!(%User{ name: "Beatrice" })
    c = Repo.insert!(%User{ name: "Cindy" })
    d = Repo.insert!(%User{ name: "Dana" })

    Repo.delete_all(Task)
    Repo.insert!(%Task{ assigned_user: "Amy", complete: false, descr: "Nope", time_spent: 15, title: "No"})
    Repo.insert!(%Task{ assigned_user: "Beatrice", complete: true, descr: "Yes", time_spent: 15, title: "Yep"})
    Repo.insert!(%Task{ assigned_user: "Cindy", complete: true, descr: "Maybe", time_spent: 15, title: "Eh"})
    Repo.insert!(%Task{ assigned_user: "Cindy", complete: false, descr: "Why", time_spent: 15, title: "Why not"})
    Repo.insert!(%Task{ assigned_user: "Dana", complete: false, descr: "Yuck", time_spent: 15, title: "Ew"})
    Repo.insert!(%Task{ assigned_user: "Dana", complete: false, descr: "Yum", time_spent: 15, title: "Nom"})

  end
end

Seeds.run

