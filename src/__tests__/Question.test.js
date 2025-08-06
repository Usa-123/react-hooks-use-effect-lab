import React from "react";
import { render, act } from "@testing-library/react";
import Question from "../components/Question";

const testQuestion = {
  prompt: "What is the capital of France?",
  answers: ["Paris", "London", "Berlin", "Madrid"]
};

test("calls onAnswered after 10 seconds", () => {
  jest.useFakeTimers(); // Use fake timers
  const onAnswered = jest.fn();

  render(<Question question={testQuestion} onAnswered={onAnswered} />);

  act(() => {
    jest.advanceTimersByTime(10000); // Fast-forward 10 seconds
  });

  expect(onAnswered).toHaveBeenCalledWith(false); // Check it was called
});
