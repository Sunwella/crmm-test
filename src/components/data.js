export async function loadData() {
	let response = await fetch('https://my-json-server.typicode.com/Vespand/crmm-tasks/users');
	
	return await response.json();
}