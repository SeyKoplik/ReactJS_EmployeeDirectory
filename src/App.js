import React from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import TableHeader from "./components/TableHeader";
import SearchResults from "./components/SearchResults";
import employees from './employees.json';

class App extends React.Component {
  state = {
    employees: employees,
    search: "",
    sortOrder: "ascending" // ascending and descending sort
  }

  handleInputChange = event => {
    // const employees = this.state.employees;
    let query = event.target.value;
    const sortOrder = this.state.sortOrder

    // start search input change here to filter
    const filteredName = employees.filter(result =>
      result.name.toLowerCase().toString().includes(query)
    );
    const filteredBirthday = employees.filter(result =>
      result.birthday.toLowerCase().toString().includes(query)
      // ||
      // result.name.toLowerCase().toString().includes(query)
    );
    const filteredEmail = employees.filter(result =>
      result.email.toLowerCase().toString().includes(query)
    );
    const filteredPhone = employees.filter(result =>
      result.phone.toLowerCase().toString().includes(query)
    );
    // FILTERED SEARCH ONLY SUCCESSFULY SEARCHES FOR NAMES IN THE LIST.. HOW DO I GET TO SEARCH ALL CRITERIA AVAILABLE
    const filteredEmployees = filteredName

    // const filteredEmployees = filteredName || filteredBirthday || filteredEmail || filteredPhone

    this.setState({ employees: filteredEmployees })
  }

  handleFormSubmit = () => {
    event.preventDefault();

    const employees = this.state.employees
    const query = event.target.value;

    if (query === "" || this.state.search === "") {
      // THIS ALERT IS SHOWING EVEN WHEN THERE IS SOMETHING IN THE INPUT BOX WHEN YOU CLICK 'FIND!' BUTTON
      alert(`You need to enter a search`);
      this.setState({ employees: employees });
    } else {
      const filteredName = employees.filter(result =>
        result.name.toLowerCase().toString().includes(query)
      );
      console.log(`FILTER THROUGH RESULTS FOR SEARCH!`);

      this.setState({ employees: filteredName })
    }

  }
  
  // get sort order here
  compareSorting(a, b) {
    // return first one first
    // if (state.sortOrder === "ascending") {
      if (a.name > b.name) return 1;
      // return last one first
      if (b.name > a.name) return -1;
    // }
    // else {
    //   if (a.name > b.name) return -1;
    //   if (b.name > a.name) return 1;
    // }
    return 0;

  };

  handleSortClick = () => {
    event.preventDefault();
    // Sort Order Toggle
    // toggle from ascending to descending
    // TableHead should have clickable sort icon
    // do an if statement of ascending and descending
    // to comparesortdescending 

    // ONLY ABLE TO DO AN ASCENDING SORT FOR THE NAMES, HOW CAN I TOGGLE TO DESCENDING?? HOW TO APPLY TO OTHER CATEGORIES??
    const sortOrderNow = this.state.sortOrder == "descending" ? "ascending" : "descending";

    this.setState({ sortOrder: sortOrderNow })

    const sortedEmployees = this.state.employees.sort(this.compareSorting);

    this.setState({ employees: sortedEmployees })

    console.log(`CLICKED TO SORT!`);

  }

  render() {
    return (
      <>
        <Header />
        <SearchInput
          name="search" value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <table className="table">
          <TableHeader handleSortClick={this.handleSortClick} />

          {this.state.employees.map(individual =>
            <SearchResults
              name={individual.name}
              image={individual.image}
              phone={individual.phone}
              email={individual.email}
              birthday={individual.birthday}
              id={individual.id}
              key={individual.id}
            />)}

        </table>
      </>
    );
  }
}

export default App;
