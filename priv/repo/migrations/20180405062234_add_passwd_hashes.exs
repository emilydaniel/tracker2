defmodule Tracker2.Repo.Migrations.AddPasswdHashes do
  use Ecto.Migration

  def change do
    alter table ("users") do
      add :pass_hash, :string
    end
  end
end
