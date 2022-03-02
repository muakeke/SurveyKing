package cn.surveyking.server.core.constant;

/**
 * @author javahuang
 * @date 2022/2/23
 */
public enum ErrorCode {

	/** 暂停回收 */
	SurveySuspend(4000, "问卷已暂停回收"),
	/** 停止收集 */
	ExceededMaxAnswers(4001, "已达到回收上限，问卷停止收集"),
	/** 停止收集 */
	ExceededEndTime(4002, "超出截止时间，问卷停止收集"),
	/** 问卷已提交 */
	SurveySubmitted(4003, "问卷已提交"),
	/** 页面不存在 */
	ProjectNotFound(4004, "对不起，你访问的页面不存在"),;

	/**
	 * 前两位区分模块，后两位区分错误消息
	 */
	public int code;

	public String message;

	ErrorCode(int code) {
		this.code = code;
	}

	ErrorCode(int code, String message) {
		this.code = code;
		this.message = message;
	}

}