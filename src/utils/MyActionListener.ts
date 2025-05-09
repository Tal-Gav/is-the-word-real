type ActionName = string;
type ListenerFn = (data: string) => void;

export class MyActionListener {
  listeners: Map<ActionName, Array<ListenerFn>>;

  // Init the class
  constructor() {
    this.listeners = new Map<ActionName, ListenerFn[]>();
  }

  // registerListener registers a function to an action name.
  // In case the action already exists, the new  listener should be added to the
  // already existing listeners
  // action - Action name
  // listener - Function to invoke upon action call
  registerListener(actionName: ActionName, listener: ListenerFn) {
    const isActionNameExists = this.listeners.has(actionName);

    if (!isActionNameExists) {
      this.listeners.set(actionName, []);
    }
    this.listeners.get(actionName)!.push(listener); // added non null assertion
  }

  // When calling the removeListener all listeners are removed from the action
  // // and the action itself is removed and can no longer be called.
  // action - the Action to remove
  removeListener(actionName: ActionName) {
    this.listeners.delete(actionName);
  }

  // Invoke all registered listeners of the giving action with the passed data
  // In case the action is not registered,an exception thrown
  // action - The action name
  // data - The data to pass to all registered listeners as parameter
  emit(actionName: ActionName, data: string) {
    const actionListenersArr = this.listeners.get(actionName);

    if (actionListenersArr) {
      for (const listener of actionListenersArr) {
        listener(data);
      }
    } else {
      throw new Error(
        `Can't emit an event. Event "${actionName}" doesn't exist.`,
      );
    }
  }
}

export const actionListener = new MyActionListener();

// Call the constructor
// const actionListener = new MyActionListener();

// // Add listener to the action
// actionListener.registerListener("PRINT", (data) =>
//   console.log(`Don't tell me what I ${data} or ${data}'t do`),
// );

// // Add another listener for the action
// actionListener.registerListener("PRINT", (data) =>
//   console.log(`I eat pickles right of the ${data}`),
// );

// // Execute all listeners with the data provided
// actionListener.emit("PRINT", "Can");

// // Remove all listeners assigned to the action
// actionListener.removeListener("PRINT");

// // Test to check error of unregistered action
// actionListener.emit("TEST", "Test");

// Execute an unregistered action should be resulted with an error actionListener.emit("PRINT", "Can");
// Result -
// Don't tell me what I Can or Can't do
// I eat pickles right of the Can
// throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`); // ^
