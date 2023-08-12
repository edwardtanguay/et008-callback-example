export interface IEmployee {
	firstName: string,
	lastName: string
}

export interface ICustomer {
	companyName: string,
	contactName: string
}

export interface IEmployeeDataLoaderData {
	employees: IEmployee[],
	hasError: boolean,
	errorMessage: string
}