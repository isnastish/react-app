import React, { Fragment, useEffect, useState, useRef } from "react";
import './AppClass.css';
import Input from "./Input";

// this is a functional component
function App(props) {
    const [isTrue, setIsTrue] = useState(false);
    const [crowd, setCrowd] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [birthDate, setDataOfBirth] = useState("")

    // refs allow     
    const firstNameRef = useRef();
    const lastNameRef = useRef(null);
    const birthDateRef = useRef(null);
    const addressRef = useRef(null);

    const toggleTrue = () => {
        // unrelated code
        let x = 12;
        let y = x;

        console.log("x: %d", x);
        console.log("y: %d", y);

        console.log("after modification to x");
        x = 45;

        console.log("y: %d", y);
        console.log("x: %d", x);

        console.log("toggleTrue func was invoked");

        // javasctip object with properties
        let point = {x: 0, y: -1, z: -14};
        console.log(point);

        console.log("point.x: %d", point.x);
        console.log("point.y: %d", point.y);
        console.log("point.z: %d", point.z);

        // hash object
        let book = {
            "main title": "JavaScript",
            author: {
                firstName: "Jack", 
                lastName: "Smith",
            }
        }

        console.log(book);

        let arr = new Array();
        arr.push("first");
        arr.push("second");
        arr.push("third");
        arr.push("fourth");

        console.log(arr);

        let o1 = Object.create({x: 1, y: 2})
        console.log(o1)
        ///////////////////////////////////////////////////////

        if (isTrue) {
            setIsTrue(false);
            return;
        }

        setIsTrue(true);
    }

    const handleSubmit = (event) => {
        console.log("this function is invoked when Submit button is clicked")
        // TODO: look up preventDefault()
        event.preventDefault();
        console.log(firstName, lastName, birthDate, address)

        if (lastName !== "") {
            addPerson(firstName, lastName, birthDate, addPerson)
        }
    }

    const addPerson = (newFirstName, newLastName, newBirthDate, address) => {
        // js object
        let newPerson = {
            id: crowd.length + 1,
            firstName: newFirstName,
            lastName: newLastName,
            birthDate: newBirthDate
        }

        const newList = crowd.concat(newPerson);

        // sort by the last name
        const sorted = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        })

        setCrowd(sorted);

        // reset data 
        setFirstName("");
        setLastName("");
        setAddress("");
        setDataOfBirth("");

        console.log("rest first/last/address fields");

        // reset all references
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        addressRef.current.value = "";
        birthDateRef.current.value = "";
    }

    // react hook
    useEffect(() => {
        console.log("useEffect fired!")

        let people = [
            {
                id: 1,
                firstName: "Marry",
                lastName: "Jane",
                address: "West Abbey 45"
            },
            {
                id: 2,
                firstName: "Jack",
                lastName: "Smith",
                address: "New York street, 56"
            },
        ]
        setCrowd(people)
    }, [])

    return (
        // props.message is read-only
        // conditional rendering
        // when the button is toggled, `The current value of isTrue is true` is displayed
        <Fragment>
            <hr />
            <h1 className="h1-green">{props.message}</h1>
            <hr></hr>
            {isTrue &&
                <Fragment>
                    <p>The current value of isTrue is true</p>
                </Fragment>
            }
            <hr></hr>
            {isTrue
                ? <p>Is true</p>
                : <p>Is false</p>
            }
            <a href="#!" className="btn btn-outline-primary" onClick={toggleTrue}>
                Toggle isTrue
            </a>
            <hr></hr>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        ref={firstNameRef}
                        autoComplete="first-name-new"
                        className="form-control"
                        onChange={(event) => setFirstName(event.target.value)}>
                    </input>
                </div>

                <Input
                    title="Last Name"
                    type="text"
                    name="last-name"
                    ref={lastNameRef}
                    autoComplete="last-name-new"
                    className="form-control"
                    onChange={(event) => setLastName(event.target.value)}
                >
                </Input>

                <Input
                    title="Address"
                    type="text"
                    name="address"
                    ref={addressRef}
                    autoComplete="address-new"
                    className="form-control"
                    onChange={(event) => setAddress(event.target.value)}
                >
                </Input>
                <Input
                    title="Data of Birth"
                    type="date"
                    name="date-of-birth"
                    ref={birthDateRef}
                    autoComplete="date-of-birth-new"
                    className="form-control"
                    onChange={(event) => setDataOfBirth(event.target.value)}
                >
                </Input>

                <input type="submit" value="Submit" className="btn btn-outline-primary">
                </input>
            </form>
            <div>
                First Name: {firstName}<br />
                Last Name: {lastName}<br />
                Address: {address}<br />
                DateOfBirth: {birthDate}
            </div>
            <hr />
            <ul className="list-group">
                {crowd.map((m) => (
                    <li key={m.id} className="list-group-item">{m.firstName} {m.lastName} {m.id} {m.address}</li>
                ))
                }
            </ul>
        </Fragment>
    )
}

export default App;