import _ from 'lodash';

export function paginate(items, pageSize, currentPage) {
    const startIndex = (currentPage - 1) * pageSize;
    //_() convert array to lodash object to use in chaining
    return _(items).slice(startIndex).take(pageSize).value();
}
