import staticData from "./staticData"
import data from "./data"
import "./css/App.css"
import Button from "@mui/material/Button"
import { useState } from "react"
import handleBubble from "./HandleBubble"
import handleSelection from "./HandleSelection"
import handleInsertion from "./HandleInsertion"
import handleMerge from "./HandleMerge"
import handleQuick from "./HandleQuick"
import handleRadix from "./HandleRadix"
import DataObjectTwoToneIcon from "@mui/icons-material/DataObjectTwoTone"
import SentimentVerySatisfiedTwoToneIcon from "@mui/icons-material/SentimentVerySatisfiedTwoTone"

function App() {
	const [array, setArray] = useState(data)
	const [isClicked, setClicked] = useState(false)
	const [isFinished, setFinished] = useState(false)

	return (
		<>
			{isFinished ? (
				<div className="stack">
					<Button
						variant="outlined"
						color="success"
						size="small"
						onClick={() => {
							setFinished(false)
							setClicked(false)
							setArray([...staticData])
						}}
					>
						Try other algos
					</Button>
				</div>
			) : (
				<div className="stack">
					<Button
						onClick={() => {
							setClicked(true)
							handleBubble(array, setArray)
							setTimeout(() => {
								setFinished(true)
							}, 5000)
						}}
						size="small"
						variant="contained"
						disabled={isClicked}
					>
						Bubble Sort
					</Button>
					<Button
						onClick={() => {
							setClicked(true)
							handleInsertion(array, setArray)
							setTimeout(() => {
								setFinished(true)
							}, 5000)
						}}
						size="small"
						variant="contained"
						disabled={isClicked}
					>
						Insertion Sort
					</Button>
					<Button
						onClick={() => {
							setClicked(true)
							handleSelection(array, setArray, setFinished)
							setTimeout(() => {
								setFinished(true)
							}, 5000)
						}}
						size="small"
						variant="contained"
						disabled={isClicked}
					>
						Selection Sort
					</Button>
					<Button
						onClick={() => {
							setClicked(true)
							handleMerge(array, setArray)
							setTimeout(() => {
								setFinished(true)
							}, 5000)
						}}
						size="small"
						variant="contained"
						disabled={isClicked}
					>
						Merge Sort
					</Button>
					<Button
						onClick={() => {
							setClicked(true)
							handleQuick(array, setArray)
							setTimeout(() => {
								setFinished(true)
							}, 7000)
						}}
						size="small"
						variant="contained"
						disabled={isClicked}
					>
						Quick Sort
					</Button>
					<Button
						onClick={() => {
							setClicked(true)
							handleRadix(array, setArray)
							setTimeout(() => {
								setFinished(true)
							}, 2000)
						}}
						size="small"
						variant="contained"
						disabled={isClicked}
					>
						Radix Sort
					</Button>
				</div>
			)}
			{isFinished && (
				<div className="emoji">
					<SentimentVerySatisfiedTwoToneIcon />
					<Button
						size="small"
						color="success"
						disabled
						style={{ fontWeight: 700 }}
					>
						Sorted !
					</Button>
				</div>
			)}

			<div className="bars">
				{array.map((value, index) => {
					let heightBar = (value / 1000) * 100 - 10
					heightBar = Math.round(heightBar) + "%"
					return (
						<div
							key={index}
							style={{
								height: heightBar,
								backgroundColor: isFinished && "#367E18"
							}}
						></div>
					)
				})}
			</div>
			<footer style={{ textAlign: "center" }}>
				<Button color="secondary">
					Software Engineering Project By Aravindhan &nbsp;{" "}
					<DataObjectTwoToneIcon />
				</Button>
			</footer>
		</>
	)
}

export default App
