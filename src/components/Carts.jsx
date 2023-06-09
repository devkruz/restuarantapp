import {MdShoppingBasket} from 'react-icons/md'

function Carts() {
	return (
		<div className="relative flex justify-center items-center">
			<MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
			<div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
				<p className="text-xs text-white font-semibold">2</p>
			</div>
		</div>
	);
}

export default Carts
