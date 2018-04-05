defmodule Tracker2Web.TaskController do
  use Tracker2Web, :controller

  alias Tracker2.Tasks
  alias Tracker2.Tasks.Task

  action_fallback Tracker2Web.FallbackController

  def index(conn, _params) do
    task = Tasks.list_task()
    render(conn, "index.json", task: task)
  end

  def create(conn, %{"task" => task_params, "token" => token}) do
    {:ok, user_id} = Phoenix.Token.verify(conn, "auth token", token, max_age: 86400)
    if task_params["user_id"] != user_id do
      IO.inspect({:bad_match, task_params["user_id"], user_id})
      raise "hax!"
    end
  end

  def show(conn, %{"id" => id}) do
    task = Tasks.get_task!(id)
    render(conn, "show.json", task: task)
  end

  def update(conn, %{"id" => id, "task" => task_params}) do
    task = Tasks.get_task!(id)

    with {:ok, %Task{} = task} <- Tasks.update_task(task, task_params) do
      render(conn, "show.json", task: task)
    end
  end

  def delete(conn, %{"id" => id}) do
    task = Tasks.get_task!(id)
    with {:ok, %Task{}} <- Tasks.delete_task(task) do
      send_resp(conn, :no_content, "")
    end
  end
end
