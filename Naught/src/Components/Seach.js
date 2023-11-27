import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<FaSearch className='search-icon' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Type to search...'
			/>
		</div>
	);
};

export default Search;