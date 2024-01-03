# node-app-commons

## commons install

```bash
npm i node-app-commons
```

## use class

- Person
- User
- Message
- Channel
- Timeline

```javascript
import Person from './src/person.js';
import User from './src/user.js';
import Message from './src/message.js';
import Channel from './src/channel.js';
import Timeline from './src/timeline.js';

const person = new Person('Manuel');

const name = person.getName();
// ...
const user = new User(name, 'manuelflorezw@gmail.com', '***');

const message = new Message(`Saluda ${user.getName()}`);

const channel = new Channel(message, 'name-queue');
//..

const data = {
    name: "pedro",
    rol: "admin",
    ...
};

const timeline = new Timeline(new Date(), data);
  ...
timeline.setEnd(new Date());

```

## NOTA: The use class
