# onHold
Demo of using useOnHold custome hook [DEMO](https://ordamari.github.io/onHold/)

Demo styling inspired by ["Online Tutorials"](https://www.youtube.com/c/OnlineTutorials4Designers) youtube channel

## useOnHold
On every tag in html we have few click and touch events: onClick, onKeyDown, onTouch etc. but we dont have onHold event,
useOnHold come to solve this problem.

useOnHold target is give to the element the handlers that listen to over events and in accriding to them understand when the element hold and run callback function in interval until the user stop holding the element

useOnHold is very simply to use, he get the callback function and return handlers,

```
const [number, setNumber] = useState(100);
const increase = () => {
    setNumber(prev => prev + 1)
}
const incHandlers = useOnHold(increase);
```


the function run in interval every 100 ms when the user holding the element, the hendlers need to spred on the element

```
<button
  className="inc"
  {...incHandlers}
  onClick={increase}
>
  +
</button>
```
