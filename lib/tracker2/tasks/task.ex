defmodule Tracker2.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "task" do
    field :assigned_user, :string
    field :complete, :boolean, default: false
    field :descr, :string
    field :time_spent, :integer
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :descr, :assigned_user, :complete, :time_spent])
    |> validate_required([:title, :descr, :assigned_user, :complete, :time_spent])
  end
end
