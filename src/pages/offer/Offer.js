import React, { Fragment } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Circle, Flex, Highlight, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { prop } from 'ramda'

import SubTitle from '../../components/Titles/SubTitle'
import Paragraph from '../../components/Chakra/Paragraph'

import { useTranslate } from '~/utils/translate'
import PageWrapper from '~/components/PageWrapper'
import { PageHeading } from '~/components/Titles'
import { PageLayout } from '~/components/Layouts'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbCurrent
} from '~/components/Breadcumb'
import { ROOT_URL } from '~/constants/routes'
import { getListData } from '~/utils/fetch'
import WeightText from '~/components/Chakra/WeightText'

const Helper = styled.ul`
  list-style: none;
  padding-left: 21px;
  margin: 0 0 28px;
  & a {
        color: blueviolet
  };
  & li {
    position: relative;
    color: #242424;
    margin: 0 0 16px;
  }
`

const Counter = styled.div`
  position: absolute;
  top: 0;
  left: -47px;
`

const article = [
  {
    titleRu: 'Договор перевозки',
    list: [
      {
        htmlRu: 'Настоящие условия представляют собой публичную оферту на заключение Договора перевозки грузов консенсуального типа, совершаемый между Клиентом и перевозчиком «ЮМЭКС».'
      },
      {
        htmlRu:
          '<p>Подписание индивидуальной накладной «ЮМЭКС» означает заключение Договора перевозки грузов между Клиентом и перевозчиком «ЮМЭКС», а также согласие Клиента с условиями перевозки и таможенного сопровождения, изложенными в настоящем договоре. <br/> <strong>Указание Клиента в индивидуальной накладной «ЮМЭКС» в качестве Получателя, считается акцептом оферты и выражает его безусловное согласие с настоящими условиями перевозки и таможенного сопровождения.</strong></p>'
      },
      {
        htmlRu: 'Клиенты согласны с тем, что перевозчик «ЮМЭКС» вправе вступать в договорные отношения с третьими лицами на любых приемлемых для себя условиях, с целью исполнения договора перевозки или его части, или оказания прочих услуг, в том числе услуг таможенного оформления.'
      }
    ]
  },
  {
    titleRu: 'Акцепт условий перевозки и таможенного сопровождения',
    list: [
      {
        htmlRu: 'Вручая Груз грузоперевозчику «ЮМЭКС», Клиенты, независимо от того от чьего имени они действуют и подписали ли они индивидуальную накладную «ЮМЭКС»,  соглашаются и безусловно принимают условия данного Договора.'
      },
      {
        htmlRu: 'Настоящие условия перевозки и таможенного сопровождения распространяются также на всех лиц, которых перевозчик «ЮМЭКС» использует или с которыми заключает договоры для приема, транспортировки и доставки груза, таможенного сопровождения, и могут применяться указанными лицами, таможенными представителями, а также сотрудниками, управляющими и агентами.'
      },
      {
        htmlRu: 'Любые дополнительные указания Клиента относительно передаваемого груза, не входящие в данный Договор, будут иметь силу только в случае, если подписано дополнительное соглашение между перевозчиком «ЮМЭКС» и Клиентом.'
      }
    ]
  },
  {
    titleRu: 'Определение ценности груза. Страхование',
    list: [
      {
        htmlRu: 'Ценность груза определяется его действительной стоимостью, которая отражается в   сопроводительных документах. Действительная стоимость груза подтверждается описью вложения.'
      },
      {
        htmlRu: 'Клиент имеет право самостоятельно установить ценность груза (объявленная ценность). При установлении объявленной ценности, она также отражается в сопроводительных документах.      \n' +
          'При установлении объявленной ценности, базой для расчета платежей, расчет которых производится исходя из стоимости груза, является объявленная стоимость.\n'
      },
      {
        htmlRu: 'Страхование груза производится Отправителем, в соответствии с правилами, установленными в стране-отправителе.'
      },
      {
        htmlRu: 'На основании письменной Заявки Клиента, перевозчик «ЮМЭКС» может от своего имени и за счет Клиента застраховать перевозимый им груз в любой страховой или брокерской компании имеющей на это юридическое право. Выгодоприобретатель в данном виде страхования определяется сторонами дополнительно.'
      }
    ]
  },
  {
    titleRu: 'Запрещенные к перевозке предметы и опасные грузы',
    list: [
      {
        htmlRu: 'Опасные грузы'
      },
      {
        counter: '.1',
        htmlRu: 'Грузы, которые перевозчик «ЮМЭКС» считает опасными, а также грузы, которые  могут причинить вред грузам других Клиентов не принимаются к перевозке. '
      },
      {
        htmlRu: 'Запрещенные к перевозке предметы'
      },
      {
        counter: '.1',
        htmlRu: 'Перевозчик «ЮМЭКС» не принимает к перевозке грузы, содержащие предметы, оборот которых  запрещен законодательством стран назначения.'
      },
      {
        counter: '.2',
        htmlRu: 'Клиент гарантирует, что собственноручно готовил груз к перевозке или к оказанию прочих услуг в защищенном месте, что подготовку груза производил назначенный сотрудник отправителя и что к грузу не было несанкционированного доступа во время подготовки, хранения и перевозки до момента принятия груза к перевозке.'
      },
      {
        counter: '.3',
        htmlRu: 'Клиент также гарантирует выполнение условий изложенных в п.5.2.2., если  он не является Отправителем.'
      }
    ]
  },
  {
    titleRu: 'Право досмотра',
    list: [
      {
        htmlRu: 'Клиенты согласны с правом перевозчика «ЮМЭКС», таможенного представителя, уполномоченных государственных органов, включая таможенные, в целях соблюдения законодательства или устранения возможного вреда другим грузам, а также при подозрении на недопустимое или опасное вложение вскрывать и проверять грузы.'
      },
      {
        htmlRu: 'Клиенты согласны с правом перевозчика «ЮМЭКС» или назначенного таможенного представителя от имени и по поручению Клиентов присутствовать при таможенном досмотре и осуществлении других таможенных операций и формальностей.'
      }
    ]
  },
  {
    titleRu: 'Таможенное сопровождение',
    list: [
      {
        // eslint-disable-next-line max-len
        htmlRu: 'Клиенты предоставляют перевозчику " ЮМЭКС " право выбора таможенного представителя, агента в целях осуществления таможенного оформления грузов от их имени в стране назначения, Клиенты также соглашаются с тем, что Перевозчик «ЮМЭКС» может выступать номинальным грузополучателем с единственной целью назначения таможенного представителя для проведения таможенного оформления. Агентами клиента в целях осуществления таможенного оформления от их имени в стране назначения могут выступать АО "Юнитрейд" (в этом случае клиенты принимают (безоговорочный акцепт) оферту таможенного представителя размещённую на сайте <a href="http://sms.unitrade.su/">http://sms.unitrade.su/</a>) '
      },
      {
        htmlRu: 'В случае требования таможенными органами предоставления дополнительных документов с целью подтверждения таможенных деклараций на ввоз/вывоз грузов или права перевозчика «ЮМЭКС» осуществлять таможенное оформление, предоставление требуемых документов производится Клиентами за собственный счет.'
      },
      {
        htmlRu: 'Перевозчик «ЮМЭКС» информирует Получателей о необходимости оплаты таможенных платежей и пошлин, а также административных расходов, связанных с дополнительной работой, и любых других дополнительно понесенных издержек, которые в последствии будут выставлены Таможенной Службой Получателям для оплаты.'
      },
      {
        htmlRu: 'До момента подписания Клиентами индивидуальной накладной «ЮМЭКС» таможенный представитель, действуя в их интересах, осуществляет таможенное сопровождение от их  имени и/или от имени перевозчика «ЮМЭКС». В таком случае Договор перевозки грузов считается надлежащим образом, заключенным до момента возражения одной из сторон.'
      },
      {
        // eslint-disable-next-line max-len
        htmlRu: 'Клиенты обязуются предоставлять полную и достоверную информацию в отношении вывоза и ввоза грузов. Клиенты должны знать, что в случае предоставления недостоверной или заведомо ложной информации о грузе или его содержимом к ним может быть предъявлен гражданский иск и/или они могут быть привлечены к уголовной ответственности, в связи с чем, к ним могут быть применены виды наказания в виде конфискации и продажи груза Клиентов. перевозчик «ЮМЭКС» может на добровольной основе оказать содействие в осуществлении таможенного оформления и других процедур, но весь риск будет отнесен на счет Клиента.'
      },
      {
        htmlRu: 'Клиент обязуется возместить перевозчику «ЮМЭКС» убытки и оградить его от претензий, которые могут возникнуть в связи с предоставленной им информацией, а также от любых издержек, которые перевозчик «ЮМЭКС» может понести в связи с действиями Клиента, изложенными в пункте 7.5., а также оплатить любые административные расходы, связанные с оказанием услуг, предусмотренных настоящими условиями.'
      },
      {
        htmlRu: 'Любые таможенные платежи, налоги (включая, но не ограничиваясь, налогом на добавленную  стоимость,  если  он  подлежит  уплате),  штрафы,  стоимость   хранения  или \n' +
          // eslint-disable-next-line max-len
          'другие расходы, которые перевозчик «ЮМЭКС », в том числе и таможенный представитель, могут понести в результате действий таможенных или других государственных органов власти, или в связи с тем, что Клиенты не смогут предоставить надлежащий перечень документов, и/или получить необходимую лицензию или разрешение, Отправитель берет на себя , а также осуществляет оплату расходов, связанных с дополнительной работой, и любых других дополнительно понесенных издержек в случае, если Получатель отказывается принять груз, оплатить таможенные платежи и пошлины.'
      },
      {
        htmlRu: 'Перевозчик «ЮМЭКС » приложит все необходимые усилия для ускорения процесса таможенного оформления, однако он не может нести ответственность за задержку, потерю и ущерб, произошедшие вследствие действий таможенных или иных органов государственной власти.'
      }
    ]
  },
  {
    titleRu: 'Порядок и сроки доставки ',
    list: [
      {
        htmlRu: 'Порядок и сроки доставки Грузов, отправляемых(доставляемых) в рамках настоящего Договора, детально представлены на сайте <a href="https://www.yumecs.uz/">www.yumecs.uz</a>.'
      }
    ]
  },
  {
    titleRu: 'Ответственность',
    list: [
      {
        htmlRu: 'Ответственность перевозчика «ЮМЭКС » за утрату или повреждение груза или его части наступает если не докажет, что утрата, недостача либо повреждение (порча) груза произошли не по его вине.'
      },
      {
        // eslint-disable-next-line max-len
        htmlRu: 'Ответственность ЮМЭКС в отношении любого Груза, перевозка которого осуществляется авиационным транспортом (включая вспомогательную перевозку автотранспортом или остановки на маршруте), ограничена в соответствии с Монреальской или Варшавской конвенцией, или, при неприменимости указанных конвенций — меньшей из следующих сумм: (i) текущая рыночная или объявленная стоимость или (ii) 22 специальных прав заимствования за килограмм (приблизительно 30,00 долл. США за килограмм). Такие ограничения также применяются ко всем иным видам грузоперевозок, с тем исключением, что в случае перевозки Грузов автомобильным транспортом действуют ограничения, перечисленные ниже.\n' +
          '\n' +
          // eslint-disable-next-line max-len
          'В случае международной перевозки Грузов автомобильным транспортом ответственность ЮМЭКС ограничивается или считается ограниченной условиями Конвенции о договоре международной перевозки Грузов автомобильным транспортом (КДПГ) в размере меньшей из следующих сумм: (i) текущая рыночная или объявленная стоимость или (ii) 8,33 специальных прав заимствования за килограмм (приблизительно 11,00 долл. США за килограмм). В отсутствие подлежащих применению в силу закона или более низких ограничений ответственности в действующем национальном законодательстве такие ограничения также применяются к внутренней перевозке Грузов автомобильным транспортом.\n' +
          '\n' +
          // eslint-disable-next-line max-len
          'Размер ответственности ЮМЭКС однозначно ограничивается непосредственным реальным ущербом, причиненным Грузу в результате его повреждения либо утраты, и не может превышать предельных значений в расчете на килограмм веса Груза согласно настоящему Разделу 6. Не подлежат возмещению любые иные виды убытков или ущерба, (включая, помимо прочего, упущенную выгоду, процентный доход и деловую перспективу), вне зависимости от того, являются ли подобные ущерб и убытки особыми или косвенными, даже в том случае, если DHL была поставлена в известность о риске возникновения подобного ущерба или убытков.\n'
      },
      {
        htmlRu: 'В случае, если Конвенции или национальное законодательство не применяется, размер ответственности ограничивается величиной понесенных убытков и не превышает 100 долларов за один груз, за исключением случаев, когда Отправитель указал большую сумму груза.'
      },
      {
        htmlRu: 'В случае, если сумма страхового покрытия не покрывает ущерба причиненного при перевозке груза, часть ущерба, превышающая страховое покрытие, может быть возмещена перевозчиком «ЮМЭКС», однако эти действия не являются для перевозчика обязательными.'
      }
    ]
  },
  {
    titleRu: 'Розыск груза',
    list: [
      {
        htmlRu: 'Розыск груза производится, когда груз не  прибыл  по  назначению в установленный срок доставки или прибыла только  часть  груза.  Основанием  для  розыска  такого  груза является  заявление от Клиента;'
      },
      {
        htmlRu: 'Претензии по розыску грузов принимаются и рассматриваются в порядке и сроки, предусмотренные законодательством и международными договорами Республики Узбекистан.'
      }
    ]
  },
  {
    titleRu: 'Устранение ответственности',
    list: [
      {
        // eslint-disable-next-line max-len
        htmlRu: 'Выполняя условия настоящего Договора, перевозчик «ЮМЭКС» не несет ответственность за утрату дохода, прибыли, рынков сбыта, репутации, клиентов, возможности пользования содержимым или любой другой возможности, даже если перевозчик «ЮМЭКС» знал о том, что такие убытки могут у Клиента возникнуть, а также за косвенные убытки, непредвиденные расходы, особые виды ущерба, каким бы то ни было образом связанные, среди прочего, с нарушением условий договора, наличием в действиях небрежности, неосторожности или умысла.'
      },
      {
        htmlRu: 'Перевозчик «ЮМЭКС» не несет ответственность за неисполнение обязательств перед Клиентами, произошедших по причине:\n' +
          '- стихийные бедствия: землетрясения, циклоны, ураганы, наводнения, пожары, эпидемии, туманы, снегопады или морозы;\n' +
          '- форс-мажорные обстоятельства, включая, помимо прочего: войны, катастрофы, действия враждебно настроенных лиц, забастовки, эмбарго, реализации рисков, характерных для воздушной перевозки, местных конфликтов и акций гражданского неповиновения;\n' +
          '- неблагополучная санитарно-эпидемиологическая обстановка: введение карантина, режима близкому к ЧС или режим ЧС, ситуация повлекшая за собой опасность здоровью населения и общества;\n' +
          '- перебои в работе сетей местного или национального воздушного и наземного сообщения, технические неисправности на транспорте и в оборудовании;\n' +
          '- скрытые недостатки или врожденные дефекты содержимого груза;\n' +
          '- преступные действия третьих лиц, таких как хищение и поджёг;\n' +
          '- действия или бездействие таможенных органов, служащих авиалиний и аэропортов, или государственных чиновников.\n' +
          '- того, что содержимое груза является запрещенным предметом, в том числе, если перевозчик «ЮМЭКС » принял груз к перевозке по ошибке.\n' +
          '- если повреждение груза произошло по причине недостаточной либо некачественной упаковки, либо при отсутствии на упаковке знаков, предписывающих определенный режим обращения при перевозке/перевалке данного груза.\n'
      }
    ]
  },
  {
    titleRu: 'Претензии со стороны третьих лиц',
    list: [
      {
        htmlRu: 'Претензии по вопросу исполнения настоящего Договора могут предъявляться исключительно Клиентом.'
      },
      {
        htmlRu: 'Клиент гарантирует, что не допустит, чтобы третьи лица, заинтересованные в грузе, предъявляли перевозчику «ЮМЭКС» претензии или совершали какие-либо действия в случае, если перевозчик «ЮМЭКС» не исполнил или ненадлежащим образом исполнил свои обязательства. Если же претензия или действия будут иметь место, Клиент обязуется оградить перевозчика «ЮМЭКС » от последствий таких претензий, действий и связанных с этим затрат.'
      }
    ]
  },
  {
    titleRu: 'Предъявление претензий',
    list: [
      {
        htmlRu: 'В случае возникновения у Клиента претензий по исполнению перевозчиком «ЮМЭКС» настоящего Договора, они могут быть предъявлены в порядке предусмотренном законодательством и международными договорами Республики Узбекистан'
      },
      {
        htmlRu: 'В случае возникновения со стороны Клиента претензий за повреждение или задержку груза, или требований о возмещении других убытков, Клиент должен строго соблюдать правила Конвенции, подлежащей применению, и требования пункта 12.3 настоящего Договора,  при несоблюдении которых перевозчик «ЮМЭКС» оставляет за собой право отказать Клиенту в рассмотрении претензии.'
      },
      {
        htmlRu: 'При получении груза Клиент делает запись в доставочном листе о повреждении груза, в противном случае перевозчик «ЮМЭКС» считает, что доставил груз в надлежащем состоянии. Для рассмотрения претензии о повреждении груза, Клиенты должны представить содержимое отправления и оригинальную упаковку для осмотра.'
      },
      {
        // eslint-disable-next-line max-len
        htmlRu: 'Все претензии должны быть предъявлены перевозчику «ЮМЭКС» в письменном виде в течение 30 (тридцати) дней с даты приема Груза Клиентом или с даты, когда груз должен был быть доставлен, или с даты, когда Клиент был оповещен об утрате, в противном случае предъявленные претензии не будут рассматриваться. В отношении одного Груза можно заявить только одну претензию, при этом ее урегулирование является полным и окончательным урегулированием всех требований о возмещении ущерба и убытков в отношении такого Груза. Клиент должен предъявить все документы, касающиеся груза и/или его утери, повреждения или задержки. '
      },
      {
        htmlRu: 'Перевозчик «ЮМЭКС» обязан рассмотреть жалобу и ответить на нее в течение 90 (девяносто) календарных дней с даты получения претензии. Перевозчик «ЮМЭКС» не обязан предпринимать действия по удовлетворению претензии до тех пор, пока не будут оплачены услуги по перевозке. Клиент не имеет права удерживать сумму ущерба из суммы услуг по перевозке.'
      }
    ]
  },
  {
    titleRu: 'Тарифы и оплата',
    list: [
      {
        htmlRu: 'Оплата предоставляемых услуг по перевозке из пункта отправления в пункт назначения согласно заполненной индивидуальной накладной «ЮМЭКС», включая услуги по таможенному оформлению, в том числе услуги за уплату таможенных платежей и пошлин, административных   расходов   и   иных   издержек, производится   Клиентами   в \n' +
          'соответствии с действующими тарифами и ценами. Клиент согласен с тем, что вес и/или количество мест, которые определил перевозчик «ЮМЭКС», при приеме груза будут использованы для целей расчета стоимости. При расчете учитывается также ценность груза.\n'
      },
      {
        htmlRu: 'Обязанность оплаты импортных пошлин, налогов и других сборов, которая может возникнуть в стране назначения ложится на Получателя. В случае отказа Получателя от такой обязанности, груз возвращается Отправителю, в этом случае оплата таможенных платежей и пошлин, а также расходов, связанных с дополнительной работой, и любых других дополнительно понесенных издержек перевозчика «ЮМЭКС » осуществляется Отправителем, за исключением случаев, когда Отправителем является «ЮМЭКС».'
      },
      {
        htmlRu: 'Оплата предоставляемых услуг может производиться третьими лицами по поручению Клиентов, в том числе и оплата услуг таможенного представителя.'
      },
      {
        htmlRu: 'Стоимость услуг перевозчика «ЮМЭКС » рассчитывается на основании тарифов, указанных на сайте <a href="https://www.yumecs.uz/">www.yumecs.uz</a>.'
      },
      {
        htmlRu: 'Оплата услуг должна быть произведена в течении 2 рабочих дней до отправления груза, в случае неоплаты услуг груз не будет передан на отправку.'
      }
    ]
  },
  {
    titleRu: 'Персональные данные',
    list: [
      {
        htmlRu: 'Передавая товары для доставки, Клиенты соглашаются, что перевозчику «ЮМЭКС» в ходе исполнения обязанностей по настоящему договору могут стать известны персональные данные и конфиденциальная информация лиц, связанных с перевозкой груза (Клиент, Отправитель, Получатель и т.д.)'
      },
      {
        htmlRu: 'Лица указанные в п.15.1, соглашаются с правом перевозчика «ЮМЭКС» в целях исполнения принятых на себя по настоящему Договору обязательств,  производить  сбор, хранение, передачу, уничтожение и обработку персональных данных и конфиденциальной информации, при условии соблюдения их конфиденциальности.'
      }
    ]
  }
]
export default function Offer ({ faqData, faqCategoryData }) {
  const { results } = getListData(faqData)
  const { t, translateData } = useTranslate()
  return (
    <PageWrapper title={'YUMECS'}>
      <PageLayout>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROOT_URL}>
              {t('home_page_title')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbCurrent>
              {t('menu_offer')}
            </BreadcrumbCurrent>
          </BreadcrumbItem>
        </Breadcrumb>

        <PageHeading mb={6} whiteSpace={'pre-line'}>
          {t('offer_page_title')}
        </PageHeading>
        <SubTitle mb={4}>
          {t('offer_title')}
        </SubTitle>
        <Paragraph mb={2}>
          В настоящей статье определены значения терминов, которые используются в условиях Договора перевозки и таможенного сопровождения, заключенного между Клиентами и перевозчиком «ЮМЭКС».
        </Paragraph>
        <Helper>
          <li>
            <Highlight query={'Перевозчик «ЮМЭКС»'} styles={{ fontWeight: 600 }}>
              Перевозчик «ЮМЭКС» – общество с ограниченной ответственностью «ЮМЭКС», юридический адрес: 117105, г. Москва, Варшавское шоссе 5, основной государственный регистрационный номер 1217700146652, осуществляющее деятельность по международной перевозке грузов, а также третьи лица, в том числе таможенные представители, связанные с перевозчиком «ЮМЭКС» договорными отношениями по перевозке и таможенному оформлению грузов;
            </Highlight>
          </li>
          <li>
            <Text>
              {/*  eslint-disable-next-line max-len */}
              <WeightText>Груз</WeightText> – товар, перевозимый в рамках перевозки любыми видами транспорта с использованием электронной информационной системы организации и отслеживания перевозок (<a href={'https://www.yumecs.uz/'}>www.yumecs.uz</a>, <a href={'http://boxhoff.com/'}>www.boxhoff.com</a>) в целях доставки данного товара до получателя в соответствии с индивидуальной накладной в течение минимально возможного и (или) фиксированного промежутка времени, за исключением товара, пересылаемого в
              международных почтовых отправлениях;
            </Text>
          </li>
          <li>
            <Highlight query={'Отправитель'} styles={{ fontWeight: 600 }}>
              Отправитель – юридическое или физическое лицо, передавшее перевозчику груз для доставки;
            </Highlight>
          </li>
          <li>
            <Highlight query={'Получатель'} styles={{ fontWeight: 600 }}>
              Получатель – получатель груза, указанный на лицевой стороне индивидуальной накладной «ЮМЭКС»;
            </Highlight>
          </li>
          <li>
            <Highlight query={'Клиент'} styles={{ fontWeight: 600 }}>
              Клиент – отправитель или получатель груза, предъявитель индивидуальной накладной «ЮМЭКС», собственник содержимого груза или любое другое лицо, которое имеет права в отношении груза;
            </Highlight>
          </li>
          <li>
            <Highlight query={'Таможенный представитель / таможенный брокер'} styles={{ fontWeight: 600 }}>
              Таможенный представитель / таможенный брокер - юридическое лицо страны назначения груза, совершающее по поручению от имени декларанта или иных заинтересованных лиц таможенные операции в соответствии с таможенным законодательством страны назначения;
            </Highlight>
          </li>
          <li>
            <Highlight query={'Декларант'} styles={{ fontWeight: 600 }}>
              Декларант -  лицо, перемещающее товары, декларирующее, представляющее и  предъявляющее товары и транспортные средства от собственного имени, или таможенный брокер, выступающий от имени лица, перемещающего товары;
            </Highlight>
          </li>
          <li>
            <Highlight query={'Запрещенные предметы'} styles={{ fontWeight: 600 }}>
              Запрещенные предметы - вещи и материалы, принятие к перевозке которых, запрещено законодательством любой страны, на/через территорию которой перевозится груз.
            </Highlight>
          </li>
          <li>
            <Highlight query={'Объявленная ценность груза'} styles={{ fontWeight: 600 }}>
              Объявленная ценность груза  – ценность груза, установленная отправителем. Сумму объявленной ценности необходимо указать в сопроводительных документах, цифрами и прописью.
            </Highlight>
          </li>
        </Helper>
        <Accordion allowMultiple={true}>
          <Stack spacing={{
            base: 2,
            md: 4
          }}>
            {article.map((item, index) => {
              const title = translateData(item, 'title')
              const list = prop('list', item)

              return (
                <AccordionItem key={index}>
                  {({ isExpanded }) => (
                    <Fragment>
                      <AccordionButton>
                        <Box flex={'1'} textAlign={'left'}>
                          <Flex>
                            {index + 2}. {title}
                          </Flex>
                        </Box>
                        <AccordionIcon isExpanded={isExpanded} />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Helper style={{ paddingLeft: '40px' }}>
                          {list.map((obj, key) => {
                            const html = translateData(obj, 'html')
                            const counter = prop('counter', obj)
                            return (
                              <li key={key}>
                                <Counter>
                                  {index + 2}. {key + 1} {counter}
                                </Counter>
                                <Text dangerouslySetInnerHTML={{ __html: html }} whiteSpace={'pre-line'} />
                              </li>
                            )
                          })}
                        </Helper>
                      </AccordionPanel>
                    </Fragment>
                  )}
                </AccordionItem>
              )
            })}
          </Stack>
        </Accordion>
      </PageLayout>
    </PageWrapper>
  )
}