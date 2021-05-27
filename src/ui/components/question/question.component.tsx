import { memo, useCallback, useMemo, useState } from 'react';
import Title from 'antd/lib/typography/Title';
import { RadioChangeEvent } from 'antd/lib/radio';
import { Alert, Button, Radio, Space } from 'antd';
import css from './question.module.css';

interface Answer {
	value: string;
	description: string;
}

interface QuestionProps {
	question: string;
	answers: Answer[];
	currentAnswerIndex?: number;
}

export const Question = memo((props: QuestionProps) => {
	const { question, currentAnswerIndex, answers } = props;
	const [submitIsClicked, setSubmitClicked] = useState(false);
	const [answer, setAnswer] = useState<number | undefined>();

	const submitIsDisabled = useMemo(() => answer === undefined, [answer]);

	const handleClickSubmit = useCallback(() => setSubmitClicked(true), []);
	const handleClickAnswer = useCallback((e: RadioChangeEvent) => {
		setSubmitClicked(false);
		setAnswer(e.target.value);
	}, []);

	return (
		<>
			<Title level={3}>{question}</Title>
			<Space direction={'vertical'} className={css.container}>
				<Radio.Group onChange={handleClickAnswer} value={answer}>
					<Space direction={'vertical'}>
						{answers.map((answer, key) => (
							<Radio key={key} value={key}>
								{answer.value}
							</Radio>
						))}
					</Space>
				</Radio.Group>
				{submitIsClicked && answer !== undefined && (
					<>
						{answer === currentAnswerIndex ? (
							<Alert type={'success'} message={answers[answer].description} showIcon />
						) : (
							<Alert type={'error'} message={answers[answer].description} showIcon />
						)}
					</>
				)}
				<Button disabled={submitIsDisabled} onClick={handleClickSubmit} type={'primary'}>
					Answer
				</Button>
			</Space>
		</>
	);
});
