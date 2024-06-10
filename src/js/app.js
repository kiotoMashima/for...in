export default function orderByProps(obj, propsOrder) {
    const objCopy = { ...obj };
    const orderedProps = [];
    const otherProps = [];

    for (let i = 0; i < propsOrder.length; i++) {
        if (propsOrder[i] in objCopy) {
            orderedProps.push({ key: propsOrder[i], value: objCopy[propsOrder[i]] });
            delete objCopy[propsOrder[i]];
        }
    }

    for (let key in objCopy) {
        if (objCopy.hasOwnProperty(key)) {
            otherProps.push({ key: key, value: objCopy[key] });
        }
    }

    otherProps.sort((a, b) => a.key.localeCompare(b.key));

    return [...orderedProps, ...otherProps];
}
console.log(orderByProps(obj, order));
