import useEmployees from '../../../apis/useEmployees';
import styles from './List.module.css';

export default function List() {
	const { employees, loading, error } = useEmployees();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching employees: {error.message}</p>;

	return (
		<div className={styles.listContainer}>
			<h2>Employee List</h2>
			<ul>
				{employees.length > 0 ? (
					employees.map((employee) => (
						<li key={employee.empId}>
							{employee.empName} - {employee.position}
						</li>
					))
				) : (
					<p>No employees found.</p>
				)}
			</ul>
		</div>
	);
}
