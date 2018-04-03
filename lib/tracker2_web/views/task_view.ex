defmodule Tracker2Web.TaskView do
  use Tracker2Web, :view
  alias Tracker2Web.TaskView

  def render("index.json", %{task: task}) do
    %{data: render_many(task, TaskView, "task.json")}
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("task.json", %{task: task}) do
    %{id: task.id,
      title: task.title,
      descr: task.descr,
      assigned_user: task.assigned_user,
      complete: task.complete,
      time_spent: task.time_spent}
  end
end
