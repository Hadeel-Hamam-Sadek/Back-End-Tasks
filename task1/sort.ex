# using elixir programming language Design & Code one of the sorting algorithms


defmodule Sort do
  def insertion_sort(list) do
    Enum.reduce(list, [], fn x, acc ->
      insert(x, acc)
    end)
  end

  defp insert(x, []) do
    [x]
  end

  defp insert(x, [y | ys] = list) when x <= y do
    [x | list]
  end

  defp insert(x, [y | ys]) do
    [y | insert(x, ys)]
  end
end

list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted = Sort.insertion_sort(list)
IO.inspect(sorted)
