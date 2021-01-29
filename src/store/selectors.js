export const getProjectList = (state) => {
    const searchText = getSearchText(state);
    const { list } = state;

    return list.filter((item) => {
        const { title } = item;
        return title.toUpperCase().includes(searchText.toUpperCase());
    });
};

export const getSelectedId = (state) => state.selectedId;

export const getSearchText = (state) => state.searchText;

export const getIsEditing = (state) => state.isEditing;
