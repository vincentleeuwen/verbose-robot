import time


class Calculator:

    def step_one(self, number):
        assert type(number) is int
        time.sleep(3)
        return number * 2

    def step_two(self, number):
        assert type(number) is int
        time.sleep(3)
        return number * 2

    def step_three(self, number):
        assert type(number) is int
        time.sleep(3)
        return number * 2
