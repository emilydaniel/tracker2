defmodule Tracker2.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset
  alias Tracker2.Users


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


  #adapted from Vikram Ramakrishnan's examples in the post
  #https://medium.com/@QuantLayer/more-custom-validations-for-ecto-changesets-17f3641be2a0
  defp validate_fifteen_min(changeset, time_spent) do
    case changeset.valid? do
      true ->
        ts = get_field(changeset, time_spent)
        case rem(ts, 15) do
          0 ->
            changeset
          _ ->
            add_error(changeset, :time_spent, "Must be in 15 min increments.")
        end
      _ ->
        changeset
    end
  end
end
