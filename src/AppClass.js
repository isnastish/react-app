import React, { Fragment, Component } from "react";
import './AppClass.css';
import Input from "./Input";

// this is a class component
export default class AppClass extends Component {
    // constructor is used to set a state
    constructor(props) {
        console.log("AppClass ctor()");

        super(props);

        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef(null);
        this.addressRef = React.createRef(null);
        this.birthDateRef = React.createRef(null);

        // javascript object
        this.state = {
            isTrue: false,
            crowd: [],
        };
    }

    setFirstName(newFirstName) {
        this.setState({firstName: newFirstName});
    }

    // this function is executed when a component is mounted
    componentDidMount() {
        console.log("component was mounted");

        this.setState({
            crowd: [
                {
                    id: 1,
                    firstName: "Marry",
                    lastName: "Jane",
                    address: "West Abbey, 45"
                },
                {
                    id: 2,
                    firstName: "Jack",
                    lastName: "Smith",
                    address: "New York street, 56"
                },
            ]
        });
        console.log(this.state.crowd);
    }

    toggleTrue = () => {
        console.log("toggle true function is invoked");

        if (this.state.isTrue) {
            this.setState({
                isTrue: false,
            });
            return;
        }

        this.setState({
            isTrue: true,
        });
    }

    handleSubmit = (event) => {
        console.log("handle submit");

        event.preventDefault();
        if (this.state.firstName !== "") {
            this.addPerson(this.state.firstName, this.state.lastName, this.state.birthDate, this.state.address);
        }
    }

    addPerson = (newFirstName, newLastName, newBirthDate, newAddress) => {
        console.log("adding person");

        // javascript object
        let newPerson = {
            id: this.state.crowd.length + 1,
            firstName: newFirstName,
            lastName: newLastName,
            birthDate: newBirthDate,
            address: newAddress,
        }

        console.log(newPerson.birthDate)
        console.log(newPerson.firstName)

        const newList = this.state.crowd.concat(newPerson);

        // sort by the last name
        const sorted = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        })

        this.setState({ crowd: sorted });
        this.setState({ firstName: "", lastName: "", birthDate: "", address: "" });

        this.firstNameRef.current.value = "";
        this.lastNameRef.current.value = "";
        this.addressRef.current.value = "";
    }

    // every functional component should have render function
    render() {
        return (
            // How do we pass a string as a property, using {this.props.message}
            <Fragment>
                <hr />
                <h1 className="h1-green">{this.props.message}</h1>
                <hr></hr>
                {this.isTrue &&
                    <Fragment>
                        <p>The current value of isTrue is true</p>
                    </Fragment>
                }
                <hr></hr>
                {this.isTrue
                    ? <p>Is true</p>
                    : <p>Is false</p>
                }
                <a href="#!" className="btn btn-outline-primary" onClick={this.toggleTrue}>
                    Toggle isTrue
                </a>
                <hr></hr>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="first-name">First Name</label>
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            ref={this.firstNameRef}
                            autoComplete="first-name-new"
                            className="form-control"
                            onChange={(event) => this.setFirstName(event.target.value)}>
                        </input>
                    </div>

                    <Input
                        title="Last Name"
                        type="text"
                        name="last-name"
                        ref={this.lastNameRef}
                        autoComplete="last-name-new"
                        className="form-control"
                        onChange={(event) => this.setState({ lastName: event.target.value })}
                    >
                    </Input>

                    <Input
                        title="Address"
                        type="text"
                        name="address"
                        ref={this.addressRef}
                        autoComplete="address-new"
                        className="form-control"
                        onChange={(event) => this.setState({ address: event.target.value })}
                    >
                    </Input>
                    <Input
                        title="Data of Birth"
                        type="date"
                        name="date-of-birth"
                        ref={this.birthDateRef}
                        autoComplete="date-of-birth-new"
                        className="form-control"
                        onChange={(event) => this.birthDate({ birthDate: event.target.value })}
                    >
                    </Input>

                    <input type="submit" value="Submit" className="btn btn-outline-primary">
                    </input>
                </form>
                <div>
                    First Name: {this.state.firstName}<br />
                    Last Name: {this.state.lastName}<br />
                    Address: {this.state.address}<br />
                    DateOfBirth: {this.state.birthDate}
                </div>
                <hr />
                <ul className="list-group">
                    {this.state.crowd.map((m) => (
                        <li key={m.id} className="list-group-item">{m.firstName} {m.lastName} {m.id} {m.address}</li>
                    ))
                    }
                </ul>
            </Fragment>
        );
    }
}