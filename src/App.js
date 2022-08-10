import {useState, useEffect} from 'react';

import './App.css';

const windowsFonts = [
    'Arial',
    'Arial Black',
    'Bahnschrift',
    'Calibri',
    'Cambria',
    'Cambria Math',
    'Candara',
    'Comic Sans MS',
    'Consolas',
    'Constantia',
    'Corbel',
    'Courier New',
    'Ebrima',
    'Franklin Gothic Medium',
    'Gabriola',
    'Gadugi',
    'Georgia',
    'HoloLens MDL2 Assets',
    'Impact',
    'Ink Free',
    'Javanese Text',
    'Leelawadee UI',
    'Lucida Console',
    'Lucida Sans Unicode',
    'Malgun Gothic',
    'Marlett',
    'Microsoft Himalaya',
    'Microsoft JhengHei',
    'Microsoft New Tai Lue',
    'Microsoft PhagsPa',
    'Microsoft Sans Serif',
    'Microsoft Tai Le',
    'Microsoft YaHei',
    'Microsoft Yi Baiti',
    'MingLiU-ExtB',
    'Mongolian Baiti',
    'MS Gothic',
    'MV Boli',
    'Myanmar Text',
    'Nirmala UI',
    'Palatino Linotype',
    'Segoe MDL2 Assets',
    'Segoe Print',
    'Segoe Script',
    'Segoe UI',
    'Segoe UI Historic',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'SimSun',
    'Sitka',
    'Sylfaen',
    'Symbol',
    'Tahoma',
    'Times New Roman',
    'Trebuchet MS',
    'Verdana',
    'Webdings',
    'Wingdings',
    'Yu Gothic'
];

const macFonts = [
    'American Typewriter',
    'Andale Mono',
    'Arial',
    'Arial Black',
    'Arial Narrow',
    'Arial Rounded MT Bold',
    'Arial Unicode MS',
    'Avenir',
    'Avenir Next',
    'Avenir Next Condensed',
    'Baskerville',
    'Big Caslon',
    'Bodoni 72',
    'Bodoni 72 Oldstyle',
    'Bodoni 72 Smallcaps',
    'Bradley Hand',
    'Brush Script MT',
    'Chalkboard',
    'Chalkboard SE',
    'Chalkduster',
    'Charter',
    'Cochin',
    'Comic Sans MS',
    'Copperplate',
    'Courier',
    'Courier New',
    'Didot',
    'DIN Alternate',
    'DIN Condensed',
    'Futura',
    'Geneva',
    'Georgia',
    'Gill Sans',
    'Helvetica',
    'Helvetica Neue',
    'Herculanum',
    'Hoefler Text',
    'Impact',
    'Lucida Grande',
    'Luminari',
    'Marker Felt',
    'Menlo',
    'Microsoft Sans Serif',
    'Monaco',
    'Noteworthy',
    'Optima',
    'Palatino',
    'Papyrus',
    'Phosphate',
    'Rockwell',
    'Savoye LET',
    'SignPainter',
    'Skia',
    'Snell Roundhand',
    'Tahoma',
    'Times',
    'Times New Roman',
    'Trattatello',
    'Trebuchet MS',
    'Verdana',
    'Zapfino'
];

const fonts = [...macFonts, ...windowsFonts];

const App = () => {
    const [elements, setElements] = useState([
        {
            style: {border: "1px solid red"},
            className: "default",
            content: "Text",
            type: "div"
        }
    ]);
    const [selectedElementIndex, setSelectedElementIndex] = useState(0);
    const [containerStyle, setContainerStyle] = useState({});

    useEffect(() => {
        selectElement(0);
    }, []);

    let selectedElement = elements[selectedElementIndex];
    let selectedStyle = selectedElement ? selectedElement.style : {};

    const selectElement = (index) => {
        setSelectedElementIndex(index);
    }

    const addElement = (type, content) => {
        let newElement = {type, content, style: {border: "1px solid black"}};
        setElements([...elements, newElement]);
        selectElement(elements.length);
    }

    const removeElement = (index) => {
        let elementList = [...elements];
        elementList.splice(index, 1);
        setElements(elementList);
    }

    const updateSelectedElement = (field, value) => {
        let elementList = [...elements];
        let updated = {...elements[selectedElementIndex]};
        
        updated[field] = value;
        elementList[selectedElementIndex] = updated;
        setElements(elementList);
    }

    const updateSelectedElementStyle = (field, value) => {
        let elementList = [...elements];
        let updated = {...selectedElement};
        let style = {...updated.style};

        style[field] = value;
        updated.style = style;
        elementList[selectedElementIndex] = updated;
        setElements(elementList);
    }

    const updateContainerStyle = (field, value) => {
        let style = {...containerStyle};

        style[field] = value;
        setContainerStyle(style);
    }

    console.log("SELECTED: " + JSON.stringify(selectedElement, null, 5));
    console.log("STYLE:    " + JSON.stringify(selectedStyle, null, 5));

    return (
        <div className="App">
            <h1>CSS Playground</h1>
            <div className="control-row">
                <div className="control-cell">
                    <h2>Actions</h2>
                    <button type="button" onClick={() => {addElement('h1', 'Header')}}>Add Header</button><br/>
                    <button type="button" onClick={() => {addElement('div', 'div')}}>Add Div</button><br/>
                    <button type="button" onClick={() => {addElement('span', 'span')}}>Add Span</button><br/>
                    <button type="button" onClick={() => {addElement('p', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris metus dui, vulputate nec iaculis sit amet, sollicitudin id eros. Pellentesque nec nunc ut magna pellentesque fringilla ut non dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque consequat nisi non dolor accumsan vestibulum. Pellentesque fermentum erat ante, sagittis suscipit lacus luctus a. Integer vitae urna ipsum. Ut vitae sapien vel lectus molestie sodales nec feugiat lacus. Duis porttitor orci sit amet nisi consequat condimentum. Ut tristique lacus id leo sagittis, id tempor arcu interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin tempus rutrum ante, a ultricies est auctor in. Donec vel finibus ante.')}}>Add Paragraph</button><br/>
                    <button type="button" onClick={() => {addElement('br', '')}}>Add Break</button><br/>
                    <button type="button" onClick={() => {addElement('hr', '')}}>Add Horizontal Rule</button><br/>
                    <button type="button" onClick={() => {removeElement(selectedElement)}}>Remove Selected</button>
                </div>
                {selectedElement ? 
                <>
                    <div className="control-cell">
                        <h2>Content</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>type:</td>
                                    <td>
                                        <select 
                                            value={selectedElement.type}
                                            onChange={(e) => {updateSelectedElement("type", e.target.value)}}
                                        >
                                            <option>h1</option>
                                            <option>div</option>
                                            <option>span</option>
                                            <option>p</option>
                                            <option>br</option>
                                            <option>hr</option>
                                        </select>;
                                    </td>
                                </tr>
                                <tr>
                                    <td>className:</td>
                                    <td>
                                        <input 
                                            type="text"
                                            value={selectedElement.className}
                                            onChange={(e) => {updateSelectedElement("className", e.target.value)}} />;
                                    </td>
                                </tr>
                                <tr>
                                    <td>content:</td>
                                    <td>
                                        <textarea
                                            value={selectedElement.content}
                                            onChange={(e) => {updateSelectedElement("content", e.target.value)}} />;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="control-cell">
                        <h2>Container Styling</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>display:</td>
                                    <td>
                                        <select 
                                            value={containerStyle.display ? containerStyle.display : ''}
                                            onChange={(e) => {updateContainerStyle("display", e.target.value)}}
                                        >
                                            <option></option>
                                            <option>block</option>
                                            <option>inline block</option>
                                            <option>table</option>
                                            <option>grid</option>
                                            <option>flex</option>
                                        </select>;
                                    </td>
                                </tr>
                                {containerStyle.display === "flex" ? <tr>
                                    <td>flex-direction:</td>
                                    <td>
                                        <select 
                                            value={containerStyle.flexDirection ? containerStyle.flexDirection : ''}
                                            onChange={(e) => {updateContainerStyle("flexDirection", e.target.value)}}
                                        >
                                            <option></option>
                                            <option>row</option>
                                            <option>row-reverse</option>
                                            <option>column</option>
                                            <option>column-reverse</option>
                                        </select>;
                                    </td>
                                </tr> : null}
                                {containerStyle.display === "flex" ? <tr>
                                    <td>justify-content:</td>
                                    <td>
                                        <select 
                                            value={containerStyle.justifyContent ? containerStyle.justifyContent : ''}
                                            onChange={(e) => {updateContainerStyle("justifyContent", e.target.value)}}
                                        >
                                            <option></option>
                                            <option>flex-start</option>
                                            <option>flex-end</option>
                                            <option>normal</option>
                                            <option>space-between</option>
                                            <option>space-around</option>
                                            <option>space-evenly</option>
                                            <option>stretch</option>
                                        </select>;
                                    </td>
                                </tr> : null}
                                {containerStyle.display === "flex" ? <tr>
                                    <td>align-content:</td>
                                    <td>
                                        <select 
                                            value={containerStyle.alignContent ? containerStyle.alignContent : ''}
                                            onChange={(e) => {updateContainerStyle("alignContent", e.target.value)}}
                                        >
                                            <option></option>
                                            <option>flex-start</option>
                                            <option>flex-end</option>
                                            <option>center</option>
                                            <option>normal</option>
                                            <option>space-between</option>
                                            <option>space-around</option>
                                            <option>space-evenly</option>
                                            <option>stretch</option>
                                        </select>;
                                    </td>
                                </tr> : null}
                                {containerStyle.display === "flex" ? <tr>
                                    <td>align-items:</td>
                                    <td>
                                        <select 
                                            value={containerStyle.alignItems ? containerStyle.alignItems : ''}
                                            onChange={(e) => {updateContainerStyle("alignItems", e.target.value)}}
                                        >
                                            <option></option>
                                            <option>flex-start</option>
                                            <option>flex-end</option>
                                            <option>center</option>
                                            <option>baseline</option>
                                            <option>stretch</option>
                                        </select>;
                                    </td>
                                </tr> : null}
                            </tbody>
                        </table>
                    </div>
                    <div className="control-cell">
                        <h2>Display Styling</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>display:</td>
                                    <td>
                                        <select 
                                            value={selectedStyle.display ? selectedStyle.display : ''}
                                            onChange={(e) => {updateSelectedElementStyle("position", e.target.value)}}
                                        >
                                            <option></option>
                                            <option>block</option>
                                            <option>inline block</option>
                                            <option>table-cell</option>
                                        </select>;
                                    </td>
                                </tr>
                                { containerStyle.display === "flex" ?
                                    <tr>
                                        <td>flex-grow:</td>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={selectedStyle.flexGrow ? selectedStyle.flexGrow : ''}
                                                onChange={(e) => {updateSelectedElementStyle("flexGrow", e.target.value)}} />;
                                        </td>
                                    </tr> 
                                    : 
                                    null
                                }
                                { containerStyle.display === "flex" ?
                                    <tr>
                                        <td>flex-shrink:</td>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={selectedStyle.flexShrink ? selectedStyle.flexShrink : ''}
                                                onChange={(e) => {updateSelectedElementStyle("flexShrink", e.target.value)}} />;
                                        </td>
                                    </tr> 
                                    : 
                                    null
                                }
                                { containerStyle.display === "flex" ?
                                    <tr>
                                        <td>flex-flow:</td>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={selectedStyle.flexFlow ? selectedStyle.flexFlow : ''}
                                                onChange={(e) => {updateSelectedElementStyle("flextFlow", e.target.value)}} />;
                                        </td>
                                    </tr> 
                                    : 
                                    null
                                }
                                { containerStyle.display === "flex" ?
                                    <tr>
                                        <td>flex-wrap:</td>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={selectedStyle.flexWrap ? selectedStyle.flexWrap : ''}
                                                onChange={(e) => {updateSelectedElementStyle("flexWrap", e.target.value)}} />;
                                        </td>
                                    </tr> 
                                    : 
                                    null
                                }
                                { containerStyle.display === "flex" ?
                                    <tr>
                                        <td>align-self:</td>
                                        <td>
                                            <select 
                                                value={containerStyle.alignSelf ? containerStyle.alignSelf : ''}
                                                onChange={(e) => {updateContainerStyle("alignSelf", e.target.value)}}
                                            >
                                                <option></option>
                                                <option>flex-start</option>
                                                <option>flex-end</option>
                                                <option>center</option>
                                                <option>normal</option>
                                                <option>space-between</option>
                                                <option>space-around</option>
                                                <option>space-evenly</option>
                                                <option>stretch</option>
                                            </select>;
                                        </td>
                                    </tr> 
                                    : 
                                    null
                                }
                                { containerStyle.display === "flex" ?
                                    <tr>
                                        <td>order:</td>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={selectedStyle.order ? selectedStyle.order : ''}
                                                onChange={(e) => {updateSelectedElementStyle("order", e.target.value)}} />;
                                        </td>
                                    </tr> 
                                    : 
                                    null
                                }
                                { selectedStyle.display === "table-cell" ?
                                    <tr>
                                        <td>vertical-align:</td>
                                        <td>
                                            <input 
                                                type="text" 
                                                value={selectedStyle.verticalAlign ? selectedStyle.verticalAlign : ''}
                                                onChange={(e) => {updateSelectedElementStyle("verticalAlign", e.target.value)}} />;
                                        </td>
                                    </tr> 
                                    : 
                                    null
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="control-cell">
                        <h2>Position Styling</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>position:</td>
                                    <td>
                                        <select 
                                            value={selectedStyle.position ? selectedStyle.position : ''}
                                            onChange={(e) => {updateSelectedElementStyle("position", e.target.value)}}
                                        >
                                            <option></option>
                                            <option>normal</option>
                                            <option>relative</option>
                                            <option>absolute</option>
                                            <option>fixed</option>
                                        </select>;
                                    </td>
                                </tr>
                                <tr>
                                    <td>top:</td>
                                    <td>
                                        <input 
                                            type="text" 
                                            value={selectedStyle.top ? selectedStyle.top : ''}
                                            onChange={(e) => {updateSelectedElementStyle("top", e.target.value)}} />;
                                    </td>
                                </tr>
                                <tr>
                                    <td>left:</td>
                                    <td>
                                        <input 
                                            type="text" 
                                            value={selectedStyle.left ? selectedStyle.left : ''}
                                            onChange={(e) => {updateSelectedElementStyle("left", e.target.value)}} />;
                                    </td>
                                </tr>
                                <tr>
                                    <td>bottom:</td>
                                    <td>
                                        <input 
                                            type="text" 
                                            value={selectedStyle.bottom ? selectedStyle.bottom : ''}
                                            onChange={(e) => {updateSelectedElementStyle("left", e.target.value)}} />;
                                    </td>
                                </tr>
                                <tr>
                                    <td>right:</td>
                                    <td>
                                        <input 
                                            type="text" 
                                            value={selectedStyle.right ? selectedStyle.right : ''}
                                            onChange={(e) => {updateSelectedElementStyle("left", e.target.value)}} />;
                                    </td>
                                </tr>
                                <tr>
                                    <td>transform:</td>
                                    <td>
                                        <input 
                                            type="text"
                                            value={selectedStyle.transform ? selectedStyle.transform : ''}
                                            onChange={(e) => {updateSelectedElementStyle("transform", e.target.value)}} />;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="control-cell">
                        <h2>Element Styling</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>margin:</td>
                                    <td>
                                        <input 
                                            type="text" 
                                            value={selectedStyle.margin ? selectedStyle.margin : ''}
                                            placeholder="top left bottom right"
                                            onChange={(e) => {updateSelectedElementStyle("margin", e.target.value)}} />;
                                    </td>
                                </tr>
                                <tr>
                                    <td>padding:</td>
                                    <td>
                                        <input 
                                            type="text" 
                                            value={selectedStyle.padding ? selectedStyle.padding : ''}
                                            placeholder="top left bottom right"
                                            onChange={(e) => {updateSelectedElementStyle("padding", e.target.value)}} />;
                                    </td>
                                </tr>
                                <tr>
                                    <td>opacity:</td>
                                    <td>
                                        <input 
                                            type="text"
                                            value={selectedStyle.opacity ? selectedStyle.opacity : ''}
                                            onChange={(e) => {updateSelectedElementStyle("opacity", e.target.value)}} />;
                                    </td>
                                </tr>
                                <tr>
                                    <td>width:</td>
                                    <td>
                                        <input 
                                            type="text"
                                            value={selectedStyle.width ? selectedStyle.width : ''}
                                            onChange={(e) => {updateSelectedElementStyle("width", e.target.value)}} />;
                                    </td>
                                </tr>
                                <tr>
                                    <td>height:</td>
                                    <td>
                                        <input 
                                            type="text"
                                            value={selectedStyle.height ? selectedStyle.height : ''}
                                            onChange={(e) => {updateSelectedElementStyle("height", e.target.value)}} />;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="control-cell">
                        <h2>Text Styling</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>font-style:</td>
                                    <td>
                                        <select 
                                            value={selectedStyle.fontStyle ? selectedStyle.fontStyle : ''}
                                            onChange={(e) => {updateSelectedElementStyle("fontStyle", e.target.value)}}
                                        >
                                            <option></option>
                                            <option>normal</option>
                                            <option>italic</option>
                                            <option>oblique</option>
                                        </select>;
                                    </td>
                                </tr>
                                <tr>
                                    <td>font-weight:</td>
                                    <td>
                                        <select 
                                            value={selectedStyle.fontWeight ? selectedStyle.fontWeight : ''}
                                            onChange={(e) => {updateSelectedElementStyle("fontWeight", e.target.value)}}
                                        >
                                            <option></option>
                                            <option>normal</option>
                                            <option>bold</option>
                                            <option>bolder</option>
                                        </select>;
                                    </td>
                                </tr>
                                <tr>
                                    <td>font-size:</td>
                                    <td>
                                        <input 
                                            type="text"
                                            value={selectedStyle.fontSize ? selectedStyle.fontSize : ''}
                                            onChange={(e) => {updateSelectedElementStyle("fontSize", e.target.value)}} />;
                                    </td>
                                </tr>
                                <tr>
                                    <td>font-family:</td>
                                    <td>
                                        <select 
                                            value={selectedStyle.fontFamily ? selectedStyle.fontFamily : ''}
                                            onChange={(e) => {updateSelectedElementStyle("fontFamily", e.target.value)}}
                                        >
                                            <option></option>
                                            { fonts.map((fontFamily) => {
                                                return <option>{fontFamily}</option>
                                            })}
                                        </select>;
                                    </td>
                                </tr>
                                <tr>
                                    <td>text-align:</td>
                                    <td>
                                        <select 
                                            value={selectedStyle.textAlign ? selectedStyle.textAlign : ''}
                                            onChange={(e) => {updateSelectedElementStyle("textAlign", e.target.value)}}
                                        >
                                            <option></option>
                                            <option>left</option>
                                            <option>center</option>
                                            <option>right</option>
                                        </select>;
                                    </td>
                                </tr>
                                <tr>
                                    <td>line-height:</td>
                                    <td>
                                        <input 
                                            type="text"
                                            value={selectedStyle.lineHeight ? selectedStyle.lineHeight : ''}
                                            onChange={(e) => {updateSelectedElementStyle("lineHeight", e.target.value)}} />;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </> : null}
            </div>
            <div style={{flexGrow: 1, position: "relative", height: "800px", border: "1px solid black"}}>
                    <div style={{position: "absolute", left: "50%", transform: "translateX(-50%)", width: "1px", height: "100%", backgroundColor: "black", opacity: 0.1, zIndex: "9999"}}></div>
                    <div style={{position: "absolute", top: "50%", transform: "translateY(-50%)",width: "100%", height: "1px", backgroundColor: "black", opacity: 0.1, zIndex: "9999"}}></div>
                <div style={containerStyle}>
                    {elements.map(({type, content, style, className}, index) => {
                        let key = `${type}-${index}`;
                        let selected = index === selectedElementIndex;
                        if (type === 'div') {
                            return <div className={`element ${selected ? ' selected' : ''}`} onClick={() => setSelectedElementIndex(index)} key={key} style={style}>{content}</div>;
                        } else if (type === 'span') {
                            return <span className={`element ${selected ? ' selected' : ''}`} onClick={() => setSelectedElementIndex(index)} key={key} style={style}>{content}</span>;
                        } else if (type === 'p') {
                            return <p className={`element ${selected ? ' selected' : ''}`} onClick={() => setSelectedElementIndex(index)} key={key} style={style}>{content}</p>;
                        } else if (type === 'h1') {
                            return <h1 className={`element ${selected ? ' selected' : ''}`} onClick={() => setSelectedElementIndex(index)} key={key} style={style}>{content}</h1>;
                        } else if (type === 'br') {
                            return <br className={`element ${selected ? ' selected' : ''}`} onClick={() => setSelectedElementIndex(index)} key={key} />;
                        } else if (type === 'hr') {
                            return <hr className={`element ${selected ? ' selected' : ''}`} onClick={() => setSelectedElementIndex(index)} key={key} />;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
