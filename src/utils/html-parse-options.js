function putValuesHTML({
    selector,
    attrib,
    value,
    html
}) {
    const div = document.createElement('div');

    div.innerHTML = html;
    [...div.querySelectorAll(selector)]
    .forEach((e) => e.setAttribute(attrib, value));

    return div.innerHTML;
}

export default putValuesHTML;