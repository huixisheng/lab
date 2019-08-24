export interface Data {
    pageNum:  number;
    pageSize: number;
    size:     number;
    orderBy:  null;
    startRow: number;
    endRow:   number;
    total:    number;
    pages:    number;
    list:     List[];
}

export interface List {
    id:                 number;
    accountId:          number;
    mobile:             string;
    gender:             number;
    country:            string;
    province:           string;
    city:               string;
    nickName:           string;
    inviteNum:          number;
    attention:          number;
    inboundInstanceNum: number;
    inboundInstanceAvg: number;
    lastInboundTime:    Date;
    returnVisitStatus:  number;
    returnVisitTime:    null;
    gmtCreate:          Date;
    gmtModified:        Date;
}
