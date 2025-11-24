import React, { useState, useMemo } from 'react';
import styles from '../AddonTable/styles.module.css';
import Link from '@docusaurus/Link';

const TechniqueTable = ({ data }) => {
  const [filterText, setFilterText] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'ascending' });

  const allTags = useMemo(() => {
    const tags = new Set();
    data.forEach(item => {
      if (item.tags) {
        item.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, [data]);

  const allCategories = useMemo(() => {
    const categories = new Set();
    data.forEach(item => {
      if (item.category) {
        categories.add(item.category);
      }
    });
    return Array.from(categories).sort();
  }, [data]);

  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter(item => {
      const searchText = filterText.toLowerCase();
      const matchesSearch = (
        (item.title && item.title.toLowerCase().includes(searchText)) ||
        (item.category && item.category.toLowerCase().includes(searchText)) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchText)))
      );

      const matchesTag = selectedTag ? (item.tags && item.tags.includes(selectedTag)) : true;
      const matchesCategory = selectedCategory ? (item.category === selectedCategory) : true;

      return matchesSearch && matchesTag && matchesCategory;
    });
  }, [sortedData, filterText, selectedTag, selectedCategory]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (name) => {
      if (sortConfig.key === name) {
          return sortConfig.direction === 'ascending'
            ? <i className="fas fa-sort-up" style={{marginLeft: '8px'}}></i>
            : <i className="fas fa-sort-down" style={{marginLeft: '8px'}}></i>;
      }
      return <i className="fas fa-sort" style={{marginLeft: '8px', opacity: 0.3}}></i>;
  };

  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag('');
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <div>
      <div className={styles.filterContainer}>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.dropdownContainer}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All Categories</option>
            {allCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All Tags</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.addonTable}>
          <thead>
            <tr>
              <th onClick={() => requestSort('title')}>Name{getSortIndicator('title')}</th>
              <th onClick={() => requestSort('category')}>Category{getSortIndicator('category')}</th>
              <th>Tags</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((technique, index) => (
              <tr key={index}>
                <td>
                  <Link to={technique.slug}>
                    <strong>{technique.title}</strong>
                  </Link>
                </td>
                <td>{technique.category}</td>
                <td>
                  {technique.tags && technique.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={styles.tag}
                      onClick={() => handleTagClick(tag)}
                      style={{cursor: 'pointer'}}
                    >
                      {tag}
                    </span>
                  ))}
                </td>
                <td>{technique.description}</td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="4" style={{textAlign: 'center'}}>No techniques found matching your filter.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechniqueTable;