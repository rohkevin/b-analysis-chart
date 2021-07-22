# Boro - Spending and Income Analysis Chart

The following component has been made for Boro's Software Engineer Quiz. 

## Basic Requirements
1. Input data might not be sorted by months. You will need to handle this.
2. On load of the widget the latest month should be selected by default.
3. The widget bars should be tappable by month like filters
4. On Tapping the month on the chart or the bars specific spending data and income data should update on the widget
5. Handle cases where only 2 months data is given instead of 4 months data. Graph would occupy the width of the screen accordingly.
6. Show the budget line according to the overall_budget passed in the object.
7. Convert months which are provided in numbers into specific readable format 10 - October , 9 - September. (You can use moment js or other libraries for this)

### Bonus Points
1. Make the widget in a flex layout such that if the parent component includes the widget with flex 0.5 the height of the bars within the widgets change accordingly.
2. Extra use cases and error handling with code comments.
3. Make the budget line animated, i.e. once the screen loads, the budget line should rise to its intended position instead of it being there at the same static position all the time.
  a. Screen loads with the bar chart and the budget line at the very bottom.
  b. After a delay (say, 300ms) the line should start rising gradually and stop at its intended position.
4. Making the widget modular
5. Additional features that you think the widget should have (Mention these in a TODO comments section on your component)