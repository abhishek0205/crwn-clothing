import * as React from 'react';
import ShopData from './shopdata';
import CollectionPreview from '../../component/collection-preview/collection-preview';

interface IShoppageState{
    collection : any[];
}

export default class ShopPage extends React.Component<{},IShoppageState> {
    constructor(props:any){
        super(props);
        this.state = {
           collection :ShopData
        }
    }
    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collection.map(({id, ...otherCollectionProps}) => {return(
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )})
                }
            </div>
        )
    }
}
