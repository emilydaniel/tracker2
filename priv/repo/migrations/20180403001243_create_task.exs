defmodule Tracker2.Repo.Migrations.CreateTask do
  use Ecto.Migration

  def change do
    create table(:task) do
      add :title, :string
      add :descr, :string
      add :assigned_user, :string
      add :complete, :boolean, default: false, null: false
      add :time_spent, :integer

      timestamps()
    end

  end
end
