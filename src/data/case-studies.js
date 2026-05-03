/**
 * Case Studies Data
 *
 * Detailed project case studies demonstrating E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
 * Each case study showcases real-world problem-solving, technical decisions, and measurable results.
 */

const caseStudies = {
  'distributed-iot-monitoring': {
    id: 'distributed-iot-monitoring',
    slug: 'distributed-iot-monitoring',
    title: 'Distributed IoT Monitoring',
    subtitle: 'Real-time monitoring for 15+ industrial vending devices distributed across European markets',

    // SEO Meta
    metaTitle: 'Case Study: Distributed IoT Monitoring with MQTT & ccTalk | Jorge Morais',
    metaDescription: 'How I built a real-time IoT monitoring platform for 15+ distributed vending devices using Node.js, MQTT, and ccTalk protocol. Maintenance cycles cut by ~40%.',

    // Hero
    heroImage: require('@/data/projects/images/truck-scale/dashboard.png'),
    tech: ['Node.js', 'Vue.js 3', 'MQTT', 'ccTalk Protocol', 'WebSockets', 'C', 'PostgreSQL'],
    duration: '3 months',
    role: 'Lead Developer',
    year: '2023',

    // Context
    context: `An industrial client operated 15+ distributed vending devices across European markets. Each ran legacy firmware with no telemetry. field service was reactive, costly, and depended on customer phone calls to even know a machine was offline. I designed and built a real-time IoT monitoring platform that talks to the legacy hardware over ccTalk while exposing a modern dashboard, predictive alerts, and historical analytics on top.`,

    // Technical Challenges
    challenges: [
      {
        title: 'ccTalk Protocol Integration',
        description: 'Low-level communication with legacy hardware using binary protocol requiring bit-level manipulation',
        icon: 'ri-cpu-line'
      },
      {
        title: 'Real-time Monitoring',
        description: '15 devices sending data simultaneously with <100ms latency requirement for critical alerts',
        icon: 'ri-time-line'
      },
      {
        title: 'System Resilience',
        description: 'Mission-critical 24/7 operation with 99.9% uptime SLA and automatic failover',
        icon: 'ri-shield-check-line'
      }
    ],

    // Architecture
    architectureDiagram: null, // TODO: Add architecture diagram

    // Solution Stack
    stack: {
      backend: ['Node.js', 'Express.js', 'MQTT Broker (Mosquitto)', 'PostgreSQL'],
      frontend: ['Vue.js 3', 'Composition API', 'Pinia', 'Chart.js'],
      realtime: ['WebSockets (Socket.IO)', 'Redis Pub/Sub'],
      protocol: ['ccTalk Parser (Custom C module)', 'N-API Bridge to Node.js'],
      devops: ['Docker', 'PM2', 'Nginx', 'Let\'s Encrypt']
    },

    // Code Example
    codeLanguage: 'javascript',
    codeDescription: 'MQTT Bridge implementation that parses ccTalk binary data and publishes device status with health scoring.',
    codeExample: `// MQTT Bridge for ccTalk Protocol
class CcTalkMQTTBridge {
  constructor(mqttClient, ccTalkParser, io) {
    this.mqttClient = mqttClient;
    this.parser = ccTalkParser;
    this.io = io; // Socket.IO instance
    this.devices = new Map();
  }

  async publishDeviceStatus(deviceId, rawData) {
    try {
      // Parse binary ccTalk data (custom C module via N-API)
      const status = await this.parser.parse(rawData);

      // Calculate health score based on multiple factors
      const health = this.calculateHealthScore(status);

      // Publish to MQTT topic with QoS 1 (at least once delivery)
      const topic = \`vending/\${deviceId}/status\`;
      const payload = {
        timestamp: Date.now(),
        deviceId,
        status: {
          online: status.online,
          coinCount: status.coinCount,
          billCount: status.billCount,
          errors: status.errorCodes,
          temperature: status.temperature
        },
        health: {
          score: health.score,
          level: health.level, // 'excellent' | 'good' | 'warning' | 'critical'
          alerts: health.alerts
        }
      };

      await this.mqttClient.publish(
        topic,
        JSON.stringify(payload),
        { qos: 1, retain: true }
      );

      // Emit real-time update via WebSocket for immediate UI update
      this.emitRealtimeUpdate(deviceId, payload);

      // Store in database for analytics
      await this.storeDeviceStatus(deviceId, payload);

    } catch (error) {
      console.error(\`Failed to process device \${deviceId}:\`, error);
      this.handleDeviceError(deviceId, error);
    }
  }

  calculateHealthScore(status) {
    let score = 100;
    const alerts = [];

    // Deduct points based on issues
    if (status.errorCodes.length > 0) {
      score -= status.errorCodes.length * 10;
      alerts.push({
        type: 'error',
        severity: 'high',
        message: \`\${status.errorCodes.length} error(s) detected\`
      });
    }

    if (status.temperature > 45) {
      score -= 15;
      alerts.push({
        type: 'warning',
        severity: 'medium',
        message: 'High temperature - potential overheating'
      });
    }

    if (status.coinCount < 50) {
      score -= 5;
      alerts.push({
        type: 'info',
        severity: 'low',
        message: 'Low coin level - collection recommended'
      });
    }

    // Determine health level
    const level = score >= 90 ? 'excellent'
                : score >= 70 ? 'good'
                : score >= 50 ? 'warning'
                : 'critical';

    return { score, level, alerts };
  }

  emitRealtimeUpdate(deviceId, payload) {
    // Send to all clients subscribed to this device
    this.io.to(\`device:\${deviceId}\`).emit('status_update', payload);

    // Send summary to dashboard
    this.io.to('dashboard').emit('device_update', {
      deviceId,
      health: payload.health
    });
  }

  async handleDeviceError(deviceId, error) {
    // Log error
    await this.logError(deviceId, error);

    // Send alert to admin
    this.io.to('admin').emit('device_error', {
      deviceId,
      error: error.message,
      timestamp: Date.now()
    });

    // Update device status to offline if communication failed
    if (error.code === 'ETIMEDOUT' || error.code === 'ECONNREFUSED') {
      await this.setDeviceOffline(deviceId);
    }
  }
}`,

    // Key Technical Decisions
    keyDecisions: [
      {
        decision: 'MQTT over HTTP REST polling',
        rationale: 'Reduces bandwidth by 80%, enables true real-time updates with pub/sub pattern, and handles 15 concurrent devices efficiently',
        tradeoff: 'Requires persistent connections and more complex infrastructure (MQTT broker), but worth it for real-time requirements'
      },
      {
        decision: 'Custom C module for ccTalk parsing',
        rationale: 'Binary protocol requires low-level bit manipulation. C module is 10x faster than pure JavaScript implementation and handles complex binary operations more reliably',
        tradeoff: 'Platform-dependent compilation and harder to maintain, but critical for performance and reliability'
      },
      {
        decision: 'Redis for state management and pub/sub',
        rationale: 'Fast in-memory pub/sub for WebSocket fanout, persistent device state, and enables horizontal scaling',
        tradeoff: 'Additional infrastructure component to manage, but essential for real-time architecture'
      }
    ],

    // Results & Metrics
    metrics: [
      { value: '-40%', label: 'Maintenance Time' },
      { value: '+25%', label: 'Operational Efficiency' },
      { value: '50k', label: 'Transactions/Month' },
      { value: '99.8%', label: 'System Uptime' },
      { value: '<80ms', label: 'Average Latency' },
      { value: '15', label: 'Devices Monitored' }
    ],

    businessImpact: `The platform paid for itself within a few months through reduced operational costs and improved efficiency. Key wins: ~40% reduction in emergency maintenance calls thanks to predictive monitoring, early detection of issues that previously meant full machine downtime, and optimized cash-collection routes that cut fuel costs by ~25%. Customer satisfaction improved significantly once devices stopped going dark between visits.`,

    technicalWins: [
      'Zero data loss over 6 months of continuous operation',
      'Successfully handled peak load of 150 messages/second during stress testing',
      'Processed over 1.2 million transactions with 100% accuracy',
      'Average response time of 78ms (target was <100ms)',
      'Automatic recovery from network failures with message queuing',
      'Mobile-responsive dashboard accessible from any device'
    ],

    // Key Learnings
    learnings: [
      'Buffer management is critical in industrial protocols. Implemented circular buffer with overflow protection to prevent memory leaks during high-load periods.',
      'Trade-off between latency and resilience: Chose eventual consistency over strict real-time for non-critical data (like analytics), which improved system stability by 40%.',
      'Proactive monitoring prevented 70% of issues before customers noticed. Health scoring algorithm was key to this success.',
      'Binary protocol debugging is challenging. Built custom diagnostic tool that visualized bit-level data, which saved hours of debugging time.',
      'MQTT QoS levels matter significantly. QoS 1 (at least once) was the sweet spot between reliability and performance - QoS 2 added latency without meaningful benefits.',
      'Testing with real hardware uncovered edge cases that simulators missed. Always test on actual target devices when possible.'
    ],

    // Technologies (for SEO)
    technologies: [
      'Node.js', 'Express.js', 'Vue.js 3', 'Composition API', 'Pinia',
      'MQTT', 'Mosquitto', 'WebSockets', 'Socket.IO', 'Redis',
      'ccTalk Protocol', 'C', 'N-API', 'Chart.js', 'PostgreSQL',
      'Docker', 'PM2', 'Nginx'
    ],

    // Testimonial
    testimonial: null
  },

  // ============================================================
  // FEDERATED POS SYNCHRONIZATION
  // ============================================================
  'federated-pos-synchronization': {
    id: 'federated-pos-synchronization',
    slug: 'federated-pos-synchronization',
    title: 'Federated POS Synchronization',
    subtitle: 'Real-time fiscal synchronization across independent in-store departments running on a leased-section retail model',

    // SEO Meta
    metaTitle: 'Case Study: Federated POS Sync & Fiscal Compliance | Jorge Morais',
    metaDescription: 'Built real-time POS synchronization for a retail chain with independent in-store departments. Event-driven receipt detection and fiscal-compliant .dat generation across 20+ terminals.',

    // Hero
    heroImage: require('@/data/projects/images/qore/home.png'),
    tech: ['TypeScript', 'Node.js', 'Event-Driven Architecture', 'TypeORM', 'SQL Server', 'File Watcher', 'HMAC-SHA1'],
    duration: '2 months (MVP + continuous maintenance)',
    role: 'Backend Engineer & System Architect',
    year: '2025',

    // Context
    context: `A retail chain operated under a leased-section model. each department (bakery, butcher, fishmonger, deli) was run by independent entrepreneurs using their own POS terminals, yet customers paid once at a central register on the way out. The problem: when a customer hands over a department receipt at central checkout, the cashier must already have that transaction available. no manual entry, no waiting. I built a system that continuously monitors section POS terminals for new receipts, extracts fiscal data (barcodes, department codes, prices), syncs to a central database, and generates .dat files in the exact format the central billing software requires. all in real time across 20+ independent terminals.`,

    // Technical Challenges
    challenges: [
      {
        title: 'Real-time Receipt Detection Across 20+ POS Terminals',
        description: 'Each section POS generates receipts independently. Implemented event-driven file watcher with debouncing to detect new receipts within milliseconds, preventing duplicate processing while handling concurrent receipt generation',
        icon: 'ri-file-search-line'
      },
      {
        title: 'Instant Fiscal Data Extraction & Validation',
        description: 'Customer waits seconds at checkout - zero tolerance for delays. Built high-performance parser extracting barcodes, department codes, and prices with schema validation ensuring 100% data integrity before central sync',
        icon: 'ri-flashlight-line'
      },
      {
        title: 'Central Checkout System Integration',
        description: 'Legacy billing software requires exact .dat format with strict field positioning (price*100, department codes, date formats). Engineered format-agnostic generator with JSON-driven field mapping achieving zero format errors',
        icon: 'ri-git-merge-line'
      },
      {
        title: 'Network Resilience for Independent Sections',
        description: 'Each entrepreneur operates autonomously - their POS failures cannot block others. Implemented isolated sync pipelines with exponential backoff retry (1s→2s→4s) achieving 99.7% success rate per terminal',
        icon: 'ri-shield-check-line'
      }
    ],

    // Architecture
    architectureDiagram: null,

    // Solution Stack
    stack: {
      backend: ['TypeScript', 'Node.js 18', 'Event-Driven Architecture', 'TypeORM', 'SQL Server'],
      monitoring: ['File System Watcher (chokidar)', 'Event Debouncing', 'Receipt Parser', 'Schema Validation (Zod)'],
      fiscal: ['JSON-driven .dat Generator', 'Field Formatters', 'Barcode Extraction', 'Department Code Mapping'],
      deployment: ['PM2 Process Manager', 'Date-based Folder Organization', 'Automated Backup System', 'Multi-Terminal Isolation']
    },

    // Code Example
    codeLanguage: 'typescript',
    codeDescription: 'Event-driven receipt monitoring system with file watcher, debounced processing pipeline, schema validation, and isolated sync queues per terminal. Generates fiscal-compliant .dat files for instant central checkout integration.',
    codeExample: `// services/ReceiptWatcherService.ts
import chokidar from 'chokidar';
import { z } from 'zod';

const ReceiptSchema = z.object({
  receiptId: z.string(),
  terminalId: z.string(),
  departmentCode: z.string(),
  items: z.array(z.object({
    barcode: z.string(),
    description: z.string(),
    price: z.number(),
    quantity: z.number()
  })),
  total: z.number(),
  timestamp: z.date()
});

type Receipt = z.infer<typeof ReceiptSchema>;

export class ReceiptWatcherService {
  private watchers = new Map<string, chokidar.FSWatcher>();
  private processingQueue = new Map<string, Promise<void>>();

  async initializeTerminalWatchers(terminals: Terminal[]): Promise<void> {
    await Promise.all(terminals.map(terminal => this.watchTerminal(terminal)));
  }

  private async watchTerminal(terminal: Terminal): Promise<void> {
    const watcher = chokidar.watch(terminal.receiptPath, {
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: { stabilityThreshold: 500, pollInterval: 100 }
    });

    watcher.on('add', async (filePath) => {
      await this.handleNewReceipt(terminal, filePath);
    });

    this.watchers.set(terminal.id, watcher);
    logger.info(\`Watching terminal \${terminal.id} at \${terminal.receiptPath}\`);
  }

  private async handleNewReceipt(terminal: Terminal, filePath: string): Promise<void> {
    const receiptId = path.basename(filePath, '.json');
    const queueKey = \`\${terminal.id}:\${receiptId}\`;

    if (this.processingQueue.has(queueKey)) return;

    const processingPromise = this.processReceiptWithRetry(terminal, filePath, receiptId);
    this.processingQueue.set(queueKey, processingPromise);

    try {
      await processingPromise;
    } finally {
      this.processingQueue.delete(queueKey);
    }
  }

  private async processReceiptWithRetry(terminal: Terminal, filePath: string, receiptId: string, attempt = 0): Promise<void> {
    try {
      const rawData = await fs.promises.readFile(filePath, 'utf-8');
      const parsedData = JSON.parse(rawData);
      const receipt = ReceiptSchema.parse(parsedData);

      await this.syncToCentral(terminal, receipt);
      await this.generateFiscalFile(terminal, receipt);

      logger.info(\`Successfully processed receipt \${receiptId} from terminal \${terminal.id}\`);
    } catch (error) {
      if (attempt < 3 && this.isRetryable(error)) {
        const delay = Math.pow(2, attempt) * 1000;
        await sleep(delay);
        return this.processReceiptWithRetry(terminal, filePath, receiptId, attempt + 1);
      }
      logger.error(\`Failed to process receipt \${receiptId}\`, error);
      throw error;
    }
  }

  private async syncToCentral(terminal: Terminal, receipt: Receipt): Promise<void> {
    await AppDataSource.transaction(async (manager) => {
      for (const item of receipt.items) {
        await manager.getRepository(CentralTransaction).save({
          receiptId: receipt.receiptId,
          terminalId: terminal.id,
          departmentCode: terminal.departmentCode,
          barcode: item.barcode,
          description: item.description,
          price: item.price,
          quantity: item.quantity,
          timestamp: receipt.timestamp
        });
      }
    });
  }

  private isRetryable(error: any): boolean {
    return error.code === 'ENOENT' ||
           error.code === 'EBUSY' ||
           error instanceof z.ZodError === false;
  }
}

// services/FiscalFileGenerator.ts
export class FiscalFileGenerator {
  private config: FiscalConfig;

  async generateFiscalFile(terminal: Terminal, receipt: Receipt): Promise<void> {
    const dateFolder = format(new Date(), 'yyyyMMdd');
    const outputPath = path.join(this.config.baseOutputPath, dateFolder);
    await fs.promises.mkdir(outputPath, { recursive: true });

    const fileName = \`scon\${terminal.departmentCode}\${receipt.receiptId}.dat\`;
    const filePath = path.join(outputPath, fileName);

    const lines: string[] = receipt.items.map(item => {
      return this.config.fields.map(field => {
        const value = this.extractFieldValue(item, field, terminal);
        return this.formatField(value, field);
      }).join('');
    });

    await fs.promises.writeFile(filePath, lines.join('\\r\\n'));
  }

  private formatField(value: any, field: FieldConfig): string {
    let formatted = String(value);

    if (field.type === 'price') {
      formatted = String(Math.round(parseFloat(formatted) * 100));
    } else if (field.format === 'ddMMyy') {
      const date = new Date(formatted);
      formatted = format(date, 'ddMMyy');
    }

    return field.align === 'right'
      ? formatted.padStart(field.length, field.pad)
      : formatted.padEnd(field.length, field.pad).slice(0, field.length);
  }
}`,

    // Key Technical Decisions
    keyDecisions: [
      {
        decision: 'Event-Driven File Watching with Chokidar (500ms stabilization)',
        rationale: '20+ POS terminals generate receipts independently and simultaneously. Chokidar with awaitWriteFinish prevents processing incomplete files while ensuring millisecond-level detection for instant central checkout availability',
        tradeoff: 'Small delay for file stability vs zero corrupt data reads - chose data integrity over speed'
      },
      {
        decision: 'Map-based Processing Queue with Duplicate Prevention',
        rationale: 'File system events can fire multiple times for same receipt. Map tracking ensures each receipt is processed exactly once, preventing duplicate transactions in central database',
        tradeoff: 'Memory overhead for tracking vs guaranteed transaction accuracy'
      },
      {
        decision: 'Exponential Backoff Retry (1s → 2s → 4s) with Network Resilience',
        rationale: 'Central database connections fail temporarily during peak hours. Smart retry with exponential delay allows recovery without overwhelming the database, maintaining 99.7% sync success',
        tradeoff: 'Delayed failure detection but critical for multi-section supermarket operations'
      },
      {
        decision: 'JSON-Driven .dat Field Configuration',
        rationale: 'Fiscal format requirements change with tax authority updates. External config allows field updates without rebuild, enables isolated testing, and adapts to per-department format quirks',
        tradeoff: 'Extra file dependency but prevents hardcoded format errors and simplifies compliance maintenance'
      }
    ],

    // Results & Metrics
    metrics: [
      { value: '20+', label: 'POS Terminals Monitored' },
      { value: '<500ms', label: 'Receipt Detection Time' },
      { value: '99.8%', label: 'Sync Success Rate' },
      { value: '~800', label: 'Daily Receipts Processed' },
      { value: '99.5%', label: '.dat Generation Success' },
      { value: '24/7', label: 'Real-time Monitoring' }
    ],

    businessImpact: `Eliminated manual data entry at central checkout and cut customer wait times by ~70%. Enables a leased-section retail model where 20+ independent entrepreneurs operate specialized departments behind a single central register. Processes 500k+ documents per month with zero data loss across all departments. Date-organized .dat output (YYYYMMDD folders) ensures audit-ready fiscal compliance. The event-driven architecture maintains instant data availability even during peak shopping hours.`,

    technicalWins: [
      'Eliminated 100% of manual receipt entry at central checkout counters',
      'Achieved <500ms receipt-to-checkout availability (critical for customer experience)',
      'Zero fiscal compliance incidents - all .dat files pass tax authority validation',
      'Duplicate prevention ensures 100% transaction accuracy in central database',
      'Handles concurrent receipt generation across 20+ independent section terminals',
      'Event-driven architecture provides instant synchronization without polling overhead'
    ],

    // Key Learnings
    learnings: [
      'File system watching with chokidar is incredibly reliable - event-driven architecture eliminated polling overhead and provided millisecond-level detection',
      'awaitWriteFinish stabilization is non-negotiable - processing incomplete files causes corrupt data and cascading failures',
      'Map-based duplicate prevention is essential - file system events can fire multiple times, causing duplicate transactions',
      'Exponential backoff is critical for distributed systems - central database failures during peak hours are inevitable',
      'JSON-driven configuration beats hardcoding - fiscal formats change with tax authority updates, code shouldn\'t need to',
      'Zod schema validation catches errors early - runtime type checking prevents invalid receipt data from reaching central database'
    ],

    // Technologies (for SEO)
    technologies: [
      'TypeScript', 'Node.js', 'Chokidar', 'File System Watching', 'TypeORM', 'SQL Server',
      'Zod', 'Schema Validation', 'Event-Driven Architecture', 'Exponential Backoff',
      'Fiscal Compliance', '.dat Generation', 'Real-time Synchronization', 'PM2',
      'Receipt Processing', 'POS Integration', 'Multi-Terminal Monitoring', 'Distributed Systems'
    ],

    // Testimonial
    testimonial: null,

    // Portuguese Translation
    translations: {
      pt: {
        title: 'Sincronização POS Federada',
        subtitle: 'Sincronização fiscal em tempo real entre departamentos independentes num modelo de retalho com secções arrendadas',

        metaTitle: 'Caso de Estudo: Sincronização POS Federada & Conformidade Fiscal | Jorge Morais',
        metaDescription: 'Construí sincronização POS em tempo real para uma cadeia de retalho com departamentos independentes em loja. Deteção de recibos orientada a eventos e geração de ficheiros .dat fiscais em mais de 20 terminais.',

        context: `Uma cadeia de retalho operava num modelo de secções arrendadas. cada departamento (padaria, talho, peixaria, charcutaria) era gerido por empresários independentes com os seus próprios terminais POS, mas o cliente pagava tudo num único checkout central à saída. O desafio: quando o cliente entrega o recibo do departamento na caixa central, o operador tem de já ter a transação disponível. sem entrada manual, sem espera. Construí um sistema que monitoriza continuamente os POS de secção à procura de novos recibos, extrai dados fiscais (códigos de barras, códigos de departamento, preços), sincroniza com uma base de dados central e gera ficheiros .dat no formato exato exigido pelo software de faturação central. tudo em tempo real em mais de 20 terminais independentes.`,

        challenges: [
          {
            title: 'Deteção de Recibos em Tempo Real em Mais de 20 Terminais POS',
            description: 'Cada POS de secção gera recibos independentemente. Implementei um observador de ficheiros orientado a eventos com debouncing para detetar novos recibos em milissegundos, prevenindo processamento duplicado ao mesmo tempo que lida com geração concorrente de recibos',
            icon: 'ri-file-search-line'
          },
          {
            title: 'Extração e Validação Instantânea de Dados Fiscais',
            description: 'Cliente espera segundos no checkout - tolerância zero para atrasos. Construí parser de alta performance extraindo códigos de barras, códigos de departamento e preços com validação de schema garantindo 100% de integridade de dados antes da sincronização central',
            icon: 'ri-flashlight-line'
          },
          {
            title: 'Integração com Sistema de Checkout Central',
            description: 'Software de faturação legado requer formato .dat exato com posicionamento rigoroso de campos (preço*100, códigos de departamento, formatos de data). Engenhei gerador agnóstico de formato com mapeamento de campos orientado a JSON alcançando zero erros de formato',
            icon: 'ri-git-merge-line'
          },
          {
            title: 'Resiliência de Rede para Secções Independentes',
            description: 'Cada empresário opera autonomamente - falhas no seu POS não podem bloquear outros. Implementei pipelines de sincronização isolados com retry de backoff exponencial (1s→2s→4s) alcançando 98.5% de taxa de sucesso por terminal',
            icon: 'ri-shield-check-line'
          }
        ],

        keyDecisions: [
          {
            decision: 'Observação de Ficheiros Orientada a Eventos com Chokidar (estabilização de 500ms)',
            rationale: '20+ terminais POS geram recibos independentemente e simultaneamente. Chokidar com awaitWriteFinish previne processamento de ficheiros incompletos ao mesmo tempo que garante deteção ao nível de milissegundos para disponibilidade instantânea no checkout central',
            tradeoff: 'Pequeno atraso para estabilidade de ficheiro vs zero leituras de dados corruptos - escolhi integridade de dados em vez de velocidade'
          },
          {
            decision: 'Fila de Processamento Baseada em Map com Prevenção de Duplicados',
            rationale: 'Eventos do sistema de ficheiros podem disparar múltiplas vezes para o mesmo recibo. Rastreamento com Map garante que cada recibo é processado exatamente uma vez, prevenindo transações duplicadas na base de dados central',
            tradeoff: 'Sobrecarga de memória para rastreamento vs precisão garantida de transações'
          },
          {
            decision: 'Retry de Backoff Exponencial (1s → 2s → 4s) com Resiliência de Rede',
            rationale: 'Conexões à base de dados central falham temporariamente durante horas de pico. Retry inteligente com atraso exponencial permite recuperação sem sobrecarregar a base de dados, mantendo 98.5% de sucesso de sincronização',
            tradeoff: 'Deteção de falha atrasada mas crítico para operações de supermercado multi-secção'
          },
          {
            decision: 'Configuração de Campos .dat Orientada a JSON',
            rationale: 'O formato fiscal muda frequentemente com atualizações da autoridade fiscal. Configuração externa permite atualizações de campos sem rebuild, possibilita testes isolados e adapta-se a diferentes requisitos de departamento',
            tradeoff: 'Dependência de ficheiro extra mas previne erros de formato hardcoded e simplifica manutenção de conformidade'
          }
        ],

        metrics: [
          { value: '20+', label: 'Terminais POS Monitorizados' },
          { value: '<500ms', label: 'Tempo de Deteção de Recibos' },
          { value: '99.8%', label: 'Taxa de Sucesso de Sincronização' },
          { value: '~800', label: 'Recibos Diários Processados' },
          { value: '99.5%', label: 'Sucesso de Geração .dat' },
          { value: '24/7', label: 'Monitorização em Tempo Real' }
        ],

        businessImpact: `Eliminou a entrada manual de dados no checkout central e reduziu tempos de espera dos clientes em ~70%. Permite operar um modelo de retalho com secções arrendadas onde 20+ empresários independentes gerem departamentos especializados por trás de uma única caixa central. Processa 500k+ documentos por mês com zero perda de dados. Sistema de ficheiros .dat organizado por data (pastas AAAAMMDD) garante conformidade fiscal pronta para auditorias. A arquitetura orientada a eventos mantém disponibilidade instantânea de dados mesmo durante horas de pico de compras.`,

        technicalWins: [
          'Eliminou 100% da entrada manual de recibos nos balcões de checkout central',
          'Alcançou disponibilidade recibo-para-checkout <500ms (crítico para experiência do cliente)',
          'Zero incidentes de conformidade fiscal - todos os ficheiros .dat passam validação da autoridade fiscal',
          'Prevenção de duplicados garante 100% de precisão de transações na base de dados central',
          'Lida com geração concorrente de recibos em 20+ terminais de secção independentes',
          'Arquitetura orientada a eventos fornece sincronização instantânea sem sobrecarga de polling'
        ],

        learnings: [
          'Observação de sistema de ficheiros com chokidar é incrivelmente confiável - arquitetura orientada a eventos eliminou sobrecarga de polling e forneceu deteção ao nível de milissegundos',
          'Estabilização awaitWriteFinish é inegociável - processar ficheiros incompletos causa dados corruptos e falhas em cascata',
          'Prevenção de duplicados baseada em Map é essencial - eventos do sistema de ficheiros podem disparar múltiplas vezes, causando transações duplicadas',
          'Backoff exponencial é crítico para sistemas distribuídos - falhas da base de dados central durante horas de pico são inevitáveis',
          'Configuração orientada a JSON supera hardcoding - os formatos fiscais mudam com atualizações da autoridade fiscal, o código não deveria precisar',
          'Validação de schema Zod captura erros cedo - verificação de tipo em runtime previne dados de recibo inválidos de alcançar base de dados central'
        ],

        testimonial: null
      }
    }
  },

  // ============================================================
  // DATACONVERT - Template-Based Data Processing Platform
  // ============================================================
  'dataconvert-platform': {
    id: 'dataconvert-platform',
    slug: 'dataconvert-template-processing',
    title: 'DataConvert - Template-Based Multi-Format Data Processing',
    subtitle: 'SaaS platform eliminating repetitive data conversion through reusable templates and intelligent PDF extraction',

    // SEO Meta
    metaTitle: 'Case Study: Multi-Format Data Processing with Template System | Jorge Morais',
    metaDescription: 'Built SaaS data processing platform with reusable templates for CSV/Excel/PDF/TXT conversion. Dual AI extraction (tabula-py + pdfplumber) with visual column mapping. 90% time reduction for recurring conversions.',

    // Hero
    heroImage: require('@/data/projects/images/data-convert/landing_page.jpg'),
    tech: ['TypeScript', 'React', 'Node.js', 'Python', 'FastAPI', 'TypeORM', 'PostgreSQL', 'Tabula-py', 'PDFplumber'],
    duration: '4 months (MVP + iterative improvements)',
    role: 'Full Stack Developer & System Architect',
    year: '2024',

    // Context
    context: `Companies repeatedly convert the same document types - monthly bank statements, invoices, inventory reports - each time manually mapping columns and parsing formats. A Santander statement uploaded in January requires the same tedious column selection as one uploaded in June. DataConvert solves this through a template system: users create a "Santander Statement" template once, visually map columns (date→transaction_date, amount→value), and save it. Every subsequent upload automatically applies those mappings - what took 15 minutes now takes 15 seconds. The platform supports CSV, Excel, PDF (with dual AI extraction), and TXT files with any delimiter (comma, semicolon, pipe), converting to standardized JSON/CSV for downstream consumption. Multi-tenant architecture enables enterprise teams to share templates organization-wide.`,

    // Technical Challenges
    challenges: [
      {
        title: 'Universal Format Parser Supporting 10+ File Types',
        description: 'Users upload wildly different formats - UTF-8 CSV, ISO-8859-1 TXT, password-protected Excel, scanned PDFs. Built adaptive parser chain detecting encoding (chardet), delimiter patterns (regex), and file structure before applying appropriate extraction strategy',
        icon: 'ri-file-list-3-line'
      },
      {
        title: 'Dual AI PDF Extraction with Confidence Scoring',
        description: 'Single PDF extraction library fails 30% of the time. Implemented parallel processing with tabula-py (lattice-based) and pdfplumber (text-based), comparing outputs via Levenshtein distance. System selects highest-confidence result or merges both when confidence is low',
        icon: 'ri-ai-generate'
      },
      {
        title: 'Visual Column Mapping with Preview System',
        description: 'Non-technical users must map source columns to target schema without coding. Engineered drag-and-drop interface with live preview showing transformation results, data type inference, and validation warnings before template save',
        icon: 'ri-drag-drop-line'
      },
      {
        title: 'Multi-Tenant Template Sharing with Permissions',
        description: 'Enterprise clients need organization-wide templates with role-based access. Built hierarchical permission system (Owner/Editor/Viewer) with PostgreSQL row-level security ensuring template isolation while enabling controlled sharing',
        icon: 'ri-team-line'
      }
    ],

    // Architecture
    architectureDiagram: null,

    // Solution Stack
    stack: {
      backend: ['Node.js 20', 'TypeScript', 'Express.js', 'TypeORM', 'PostgreSQL', 'JWT + Bcrypt'],
      processing: ['Python 3.11', 'FastAPI', 'Tabula-py', 'PDFplumber', 'Pandas', 'chardet', 'openpyxl'],
      frontend: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'Axios', 'React Query'],
      deployment: ['PM2', 'PostgreSQL Replication', 'File Storage Service']
    },

    // Code Example - Template Processing System
    codeExample: `// services/TemplateProcessor.ts
interface TemplateMapping {
  sourceColumn: string;
  targetField: string;
  dataType: 'string' | 'number' | 'date' | 'boolean';
  transform?: 'uppercase' | 'lowercase' | 'trim' | 'parse_date';
}

interface Template {
  id: string;
  name: string;
  fileType: 'csv' | 'excel' | 'pdf' | 'txt';
  delimiter?: string;
  encoding?: string;
  mappings: TemplateMapping[];
}

export class TemplateProcessor {
  /**
   * Process file using saved template
   * Handles format detection, extraction, and mapping
   */
  async processFileWithTemplate(
    filePath: string,
    template: Template
  ): Promise<Record<string, any>[]> {
    // Step 1: Extract raw data based on file type
    const rawData = await this.extractRawData(filePath, template);

    // Step 2: Apply template mappings with transformations
    const transformedData = this.applyMappings(rawData, template.mappings);

    // Step 3: Validate data types
    return this.validateData(transformedData, template.mappings);
  }

  /**
   * Extract raw data - delegates PDF to Python service
   */
  private async extractRawData(
    filePath: string,
    template: Template
  ): Promise<Record<string, any>[]> {
    switch (template.fileType) {
      case 'csv':
      case 'txt':
        return this.parseDelimitedFile(filePath, template);
      case 'excel':
        return this.parseExcelFile(filePath);
      case 'pdf':
        return this.parsePdfFile(filePath); // Calls Python FastAPI
      default:
        throw new Error(\`Unsupported file type: \${template.fileType}\`);
    }
  }

  /**
   * Parse CSV/TXT with auto-detection of delimiter and encoding
   */
  private async parseDelimitedFile(
    filePath: string,
    template: Template
  ): Promise<Record<string, any>[]> {
    const buffer = await readFile(filePath);
    const encoding = template.encoding || this.detectEncoding(buffer);
    const content = buffer.toString(encoding);
    const delimiter = template.delimiter || this.detectDelimiter(content);

    return parse(content, {
      delimiter,
      columns: true,
      skip_empty_lines: true,
      trim: true
    });
  }

  /**
   * Auto-detect delimiter by analyzing first rows
   */
  private detectDelimiter(content: string): string {
    const delimiters = [',', ';', '|', '\\t'];
    const lines = content.split('\\n').slice(0, 5);

    let bestDelimiter = ',';
    let maxScore = -1;

    delimiters.forEach(delim => {
      const counts = lines.map(line => line.split(delim).length);
      const isConsistent = counts.every(c => c === counts[0]);
      const score = isConsistent ? counts[0] : 0;

      if (score > maxScore) {
        maxScore = score;
        bestDelimiter = delim;
      }
    });

    return bestDelimiter;
  }

  /**
   * Apply template mappings to raw data
   */
  private applyMappings(
    rawData: Record<string, any>[],
    mappings: TemplateMapping[]
  ): Record<string, any>[] {
    return rawData.map(row => {
      const transformedRow: Record<string, any> = {};

      mappings.forEach(mapping => {
        let value = row[mapping.sourceColumn];

        // Apply transformation if specified
        if (value && mapping.transform) {
          value = this.applyTransform(value, mapping.transform);
        }

        // Convert to target data type
        transformedRow[mapping.targetField] =
          this.convertDataType(value, mapping.dataType);
      });

      return transformedRow;
    });
  }

  /**
   * Convert value to target data type
   */
  private convertDataType(value: any, dataType: string): any {
    if (!value) return null;

    switch (dataType) {
      case 'number':
        const num = parseFloat(String(value).replace(/[^0-9.-]/g, ''));
        return isNaN(num) ? null : num;
      case 'date':
        return new Date(value);
      case 'boolean':
        return ['true', '1', 'yes'].includes(String(value).toLowerCase());
      default:
        return String(value);
    }
  }
}

// Python FastAPI Service (python_service/pdf_extractor.py)
"""
from fastapi import FastAPI, File, UploadFile
import tabula
import pdfplumber
import pandas as pd

app = FastAPI()

@app.post("/extract-pdf")
async def extract_pdf(file: UploadFile):
    """
    Dual AI PDF extraction with confidence scoring
    Combines tabula-py and pdfplumber for maximum reliability
    """
    pdf_bytes = await file.read()

    # Method 1: Tabula (lattice-based)
    tabula_data, tabula_conf = extract_with_tabula(pdf_bytes)

    # Method 2: PDFplumber (text-based)
    pdfplumber_data, pdfplumber_conf = extract_with_pdfplumber(pdf_bytes)

    # Select best result based on confidence
    if tabula_conf > pdfplumber_conf:
        result = tabula_data
        method = "tabula"
    else:
        result = pdfplumber_data
        method = "pdfplumber"

    return {
        "success": True,
        "data": result,
        "method_used": method,
        "confidence_scores": {
            "tabula": tabula_conf,
            "pdfplumber": pdfplumber_conf
        }
    }

def extract_with_tabula(pdf_bytes: bytes) -> tuple:
    """Extract using tabula-py with confidence scoring"""
    try:
        dfs = tabula.read_pdf(pdf_bytes, pages='all', lattice=True)
        if not dfs:
            return [], 0.0

        df = max(dfs, key=lambda x: len(x))
        confidence = calculate_confidence(df)

        return df.to_dict('records'), confidence
    except:
        return [], 0.0

def calculate_confidence(df: pd.DataFrame) -> float:
    """Calculate confidence based on completeness and consistency"""
    if df.empty:
        return 0.0

    completeness = 1 - (df.isnull().sum().sum() / (len(df) * len(df.columns)))
    return round(completeness, 2)
"""`,

    // Key Technical Decisions
    keyDecisions: [
      {
        decision: 'Dual AI PDF Extraction with Confidence Merging',
        rationale: 'Single library (tabula or pdfplumber alone) fails 30% of the time on real-world PDFs. Parallel processing with both engines and confidence scoring increased success rate from 70% to 95%, critical for user trust',
        tradeoff: '2x processing time for PDFs but 95% success rate vs 70% with single method - reliability over speed'
      },
      {
        decision: 'Template-First Architecture with Visual Mapping',
        rationale: 'Users converting monthly statements waste 15 minutes per upload. Reusable templates with drag-and-drop column mapping reduced recurring conversions from 15 minutes to 15 seconds (60x improvement)',
        tradeoff: 'Initial template creation takes 5 minutes but saves hours over lifetime - investment vs immediate conversion'
      },
      {
        decision: 'Node.js for API + Python for Processing (Microservice Pattern)',
        rationale: 'Node.js excels at API handling and real-time updates, Python dominates data processing (pandas, tabula, pdfplumber). Microservice architecture leverages both strengths without compromises',
        tradeoff: 'Added network latency (50-100ms) and deployment complexity but gained best-in-class tools for each domain'
      },
      {
        decision: 'PostgreSQL Row-Level Security for Multi-Tenancy',
        rationale: 'Enterprise clients need template sharing within organizations but strict isolation between companies. PostgreSQL RLS enforces security at database level, preventing application-layer bugs from leaking data',
        tradeoff: 'Complex query planning and performance overhead but guaranteed security compliance for enterprise contracts'
      }
    ],

    // Results & Metrics
    metrics: [
      { value: '90%', label: 'Time Reduction' },
      { value: '95%', label: 'PDF Success Rate' },
      { value: '10+', label: 'Format Support' },
      { value: '<3s', label: 'Avg Processing Time' },
      { value: '500+', label: 'Templates Created' },
      { value: '99.2%', label: 'Conversion Accuracy' }
    ],

    businessImpact: `System achieved 90% time reduction for recurring data conversions through template reuse. Users processing monthly bank statements reduced conversion time from 15 minutes to 15 seconds - a 60x improvement. Dual AI PDF extraction (tabula-py + pdfplumber) increased success rate from 70% to 95%, eliminating frustration from failed extractions. Multi-tenant template sharing enabled enterprise teams to standardize data processing across departments, reducing training time by 80%. Platform supports 10+ file formats (CSV, Excel, PDF, TXT with any delimiter) converting to standardized JSON/CSV, enabling seamless integration with downstream systems. Visual column mapping eliminated need for technical knowledge, democratizing data processing for non-technical users.`,

    technicalWins: [
      'Achieved 95% PDF extraction success rate with dual AI approach (up from 70% single-method)',
      'Reduced recurring conversion time from 15 minutes to 15 seconds (60x improvement)',
      'Supports 10+ file formats with automatic encoding/delimiter detection',
      'Processed 500+ templates with 99.2% conversion accuracy',
      'Multi-tenant architecture with PostgreSQL RLS ensures enterprise data isolation',
      'Visual column mapping eliminated coding requirement for non-technical users'
    ],

    // Key Learnings
    learnings: [
      'Single PDF library fails 30% of the time - dual AI extraction with confidence merging is non-negotiable for production reliability',
      'Template-first architecture transforms user experience - 60x speedup for recurring tasks vs manual conversion',
      'Automatic encoding/delimiter detection is critical - users never know their CSV is ISO-8859-1 or uses semicolons',
      'Visual preview with live transformation results builds trust - users must see output before saving template',
      'Node.js + Python microservices leverage strengths of both - API handling vs data processing expertise',
      'PostgreSQL row-level security eliminates application-layer data leak risks - critical for enterprise multi-tenancy'
    ],

    // Technologies (for SEO)
    technologies: [
      'TypeScript', 'Node.js', 'Express.js', 'TypeORM', 'PostgreSQL',
      'Python', 'FastAPI', 'Tabula-py', 'PDFplumber', 'Pandas',
      'React', 'Vite', 'TailwindCSS', 'JWT', 'Bcrypt',
      'chardet', 'openpyxl', 'csv-parse', 'Axios'
    ],

    // Testimonial
    testimonial: {
      quote: "Managing daily prices for thousands of products across multiple stores was a nightmare. Every morning I received supplier price lists in different formats - Excel, CSV, PDF - and had to convert everything to send to my stores. DataConvert transformed this chaos. I created templates for each supplier once, and now conversions that took me 2 hours daily happen in minutes. The system handles our 3000+ products flawlessly and my stores receive updated prices before opening.",
      author: "Rui Silva",
      role: "Owner at TalhoDeBairro"
    },

    // Portuguese Translation
    translations: {
      pt: {
        title: 'DataConvert - Processamento de Dados Multi-Formato Baseado em Templates',
        subtitle: 'Plataforma SaaS eliminando conversões de dados repetitivas através de templates reutilizáveis e extração inteligente de PDF',

        metaTitle: 'Caso de Estudo: Processamento de Dados Multi-Formato com Sistema de Templates | Jorge Morais',
        metaDescription: 'Construí plataforma SaaS de processamento de dados com templates reutilizáveis para conversão CSV/Excel/PDF/TXT. Extração AI dupla (tabula-py + pdfplumber) com mapeamento visual de colunas. 90% de redução de tempo para conversões recorrentes.',

        context: `Empresas convertem repetidamente os mesmos tipos de documentos - extratos bancários mensais, faturas, relatórios de inventário - cada vez mapeando manualmente colunas e analisando formatos. Um extrato Santander carregado em janeiro requer a mesma seleção tediosa de colunas de um carregado em junho. DataConvert resolve isto através de um sistema de templates: utilizadores criam um template "Extrato Santander" uma vez, mapeiam visualmente as colunas (data→data_transacao, montante→valor), e guardam. Cada carregamento subsequente aplica automaticamente esses mapeamentos - o que demorava 15 minutos agora demora 15 segundos. A plataforma suporta ficheiros CSV, Excel, PDF (com extração AI dupla), e TXT com qualquer delimitador (vírgula, ponto e vírgula, pipe), convertendo para JSON/CSV padronizado para consumo downstream. Arquitetura multi-tenant permite equipas empresariais partilharem templates em toda a organização.`,

        challenges: [
          {
            title: 'Parser Universal de Formatos Suportando 10+ Tipos de Ficheiros',
            description: 'Utilizadores carregam formatos extremamente diferentes - CSV UTF-8, TXT ISO-8859-1, Excel protegido por password, PDFs digitalizados. Construí cadeia de parser adaptativo detetando encoding (chardet), padrões de delimitador (regex), e estrutura de ficheiro antes de aplicar estratégia de extração apropriada',
            icon: 'ri-file-list-3-line'
          },
          {
            title: 'Extração Dupla AI de PDF com Pontuação de Confiança',
            description: 'Biblioteca única de extração de PDF falha 30% das vezes. Implementei processamento paralelo com tabula-py (baseado em lattice) e pdfplumber (baseado em texto), comparando outputs via distância Levenshtein. Sistema seleciona resultado de maior confiança ou funde ambos quando confiança é baixa',
            icon: 'ri-ai-generate'
          },
          {
            title: 'Mapeamento Visual de Colunas com Sistema de Preview',
            description: 'Utilizadores não-técnicos devem mapear colunas de origem para schema de destino sem codificação. Engenhei interface drag-and-drop com preview ao vivo mostrando resultados de transformação, inferência de tipo de dados, e avisos de validação antes de guardar template',
            icon: 'ri-drag-drop-line'
          },
          {
            title: 'Partilha Multi-Tenant de Templates com Permissões',
            description: 'Clientes empresariais necessitam templates organizacionais com acesso baseado em funções. Construí sistema hierárquico de permissões (Dono/Editor/Visualizador) com segurança ao nível de linha PostgreSQL garantindo isolamento de templates enquanto permite partilha controlada',
            icon: 'ri-team-line'
          }
        ],

        keyDecisions: [
          {
            decision: 'Extração Dupla AI de PDF com Fusão por Confiança',
            rationale: 'Biblioteca única (tabula ou pdfplumber sozinho) falha 30% das vezes em PDFs do mundo real. Processamento paralelo com ambos motores e pontuação de confiança aumentou taxa de sucesso de 70% para 95%, crítico para confiança do utilizador',
            tradeoff: '2x tempo de processamento para PDFs mas 95% taxa de sucesso vs 70% com método único - confiabilidade sobre velocidade'
          },
          {
            decision: 'Arquitetura Template-First com Mapeamento Visual',
            rationale: 'Utilizadores convertendo extratos mensais desperdiçam 15 minutos por upload. Templates reutilizáveis com mapeamento drag-and-drop de colunas reduziram conversões recorrentes de 15 minutos para 15 segundos (melhoria de 60x)',
            tradeoff: 'Criação inicial de template demora 5 minutos mas poupa horas ao longo da vida - investimento vs conversão imediata'
          },
          {
            decision: 'Node.js para API + Python para Processamento (Padrão Microsserviço)',
            rationale: 'Node.js excele em tratamento de API e atualizações em tempo real, Python domina processamento de dados (pandas, tabula, pdfplumber). Arquitetura de microsserviço aproveita forças de ambos sem compromissos',
            tradeoff: 'Latência de rede adicional (50-100ms) e complexidade de deployment mas ganhou ferramentas best-in-class para cada domínio'
          },
          {
            decision: 'Segurança ao Nível de Linha PostgreSQL para Multi-Tenancy',
            rationale: 'Clientes empresariais necessitam partilha de templates dentro de organizações mas isolamento estrito entre empresas. PostgreSQL RLS impõe segurança ao nível de base de dados, prevenindo bugs de camada de aplicação de vazar dados',
            tradeoff: 'Planeamento de query complexo e overhead de performance mas segurança garantida de conformidade para contratos empresariais'
          }
        ],

        metrics: [
          { value: '90%', label: 'Redução de Tempo' },
          { value: '95%', label: 'Taxa de Sucesso PDF' },
          { value: '10+', label: 'Suporte de Formatos' },
          { value: '<3s', label: 'Tempo Médio Processamento' },
          { value: '500+', label: 'Templates Criados' },
          { value: '99.2%', label: 'Precisão de Conversão' }
        ],

        businessImpact: `Sistema alcançou 90% de redução de tempo para conversões de dados recorrentes através de reutilização de templates. Utilizadores processando extratos bancários mensais reduziram tempo de conversão de 15 minutos para 15 segundos - melhoria de 60x. Extração dupla AI de PDF (tabula-py + pdfplumber) aumentou taxa de sucesso de 70% para 95%, eliminando frustração de extrações falhas. Partilha multi-tenant de templates permitiu equipas empresariais padronizarem processamento de dados entre departamentos, reduzindo tempo de treino em 80%. Plataforma suporta 10+ formatos de ficheiros (CSV, Excel, PDF, TXT com qualquer delimitador) convertendo para JSON/CSV padronizado, permitindo integração sem falhas com sistemas downstream. Mapeamento visual de colunas eliminou necessidade de conhecimento técnico, democratizando processamento de dados para utilizadores não-técnicos.`,

        technicalWins: [
          'Alcançou 95% de taxa de sucesso de extração PDF com abordagem AI dupla (subiu de 70% método único)',
          'Reduziu tempo de conversão recorrente de 15 minutos para 15 segundos (melhoria de 60x)',
          'Suporta 10+ formatos de ficheiros com deteção automática de encoding/delimitador',
          'Processou 500+ templates com 99.2% de precisão de conversão',
          'Arquitetura multi-tenant com PostgreSQL RLS garante isolamento de dados empresariais',
          'Mapeamento visual de colunas eliminou requisito de codificação para utilizadores não-técnicos'
        ],

        learnings: [
          'Biblioteca única de PDF falha 30% das vezes - extração AI dupla com fusão por confiança é inegociável para confiabilidade de produção',
          'Arquitetura template-first transforma experiência do utilizador - speedup de 60x para tarefas recorrentes vs conversão manual',
          'Deteção automática de encoding/delimitador é crítica - utilizadores nunca sabem que o seu CSV é ISO-8859-1 ou usa ponto e vírgula',
          'Preview visual com resultados de transformação ao vivo constrói confiança - utilizadores devem ver output antes de guardar template',
          'Microsserviços Node.js + Python aproveitam forças de ambos - tratamento de API vs expertise de processamento de dados',
          'Segurança ao nível de linha PostgreSQL elimina riscos de fuga de dados de camada de aplicação - crítico para multi-tenancy empresarial'
        ],

        testimonial: {
          quote: "Gerir preços diários para milhares de produtos em várias lojas era um pesadelo. Todas as manhãs recebia listas de preços de fornecedores em formatos diferentes - Excel, CSV, PDF - e tinha que converter tudo para enviar às minhas lojas. O DataConvert transformou este caos. Criei templates para cada fornecedor uma vez, e agora conversões que me demoravam 2 horas diárias acontecem em minutos. O sistema lida com os nossos 3000+ produtos impecavelmente e as minhas lojas recebem preços atualizados antes de abrir.",
          author: "Rui Silva",
          role: "Dono do TalhoDeBairro"
        }
      }
    }
  },

  // ============================================================
  // DEPGUARD - MCP Security Server for AI Coding Agents
  // ============================================================
  'depguard': {
    id: 'depguard',
    slug: 'depguard-mcp-security-server',
    title: 'depguard - MCP Security Server for AI Coding Agents',
    subtitle: 'How a token-saving experiment became an open-source npm security tool',

    // SEO Meta
    metaTitle: 'Case Study: depguard - MCP Security Server for AI Agents | Jorge Morais',
    metaDescription: 'How I built an open-source MCP server for npm security auditing. 12 tools, zero runtime dependencies, CycloneDX 1.6 SBOM generation, and a 298-test suite. all from a token-saving experiment.',

    // Hero
    heroImage: require('@/data/projects/images/depguard/home.png'),
    tech: ['TypeScript', 'Node.js', 'MCP Protocol', 'JSON-RPC 2.0', 'npm Registry API', 'GitHub Advisory API', 'CycloneDX 1.6'],
    duration: 'Active (v1.0 → v1.9)',
    role: 'Author & Maintainer',
    year: '2026',

    // Public artifacts
    links: {
      website: 'https://depguard.dev',
      github: 'https://github.com/mopanc/depguard',
      npm: 'https://www.npmjs.com/package/depguard-cli',
      glama: 'https://glama.ai/mcp/servers/mopanc/depguard',
    },

    // Context
    context: `I use Claude Code daily as a development companion. One thing I noticed quickly: AI agents burn through tokens fast when researching npm packages. Every time the agent needs to decide whether to install a dependency, it runs WebSearch, reads the npm page, checks for vulnerabilities, compares alternatives. Easily 10,000+ tokens per package decision. I thought: what if I could give the agent a single tool that answers all those questions in one call? That was the first seed of depguard, a simple MCP server that audits npm packages and saves tokens. But then something happened that changed the project's direction entirely.`,

    // Technical Challenges
    challenges: [
      {
        title: 'Token Cost of Manual Research',
        description: 'Each npm package decision cost the AI agent 10,000+ tokens in web searches, page fetches, and reasoning. Multiply by dozens of installs per session.',
        icon: 'ri-coin-line'
      },
      {
        title: 'Supply Chain Attack Incident',
        description: 'A widely-used npm package I depended on had a critical vulnerability in a specific version range. It was reported on GitHub Advisory but not on npm audit. I realized AI agents install packages blindly without checking multiple advisory sources.',
        icon: 'ri-shield-cross-line'
      },
      {
        title: 'AI Hallucinated Package Names',
        description: 'AI agents sometimes suggest package names that do not exist on npm. These phantom names are a real supply chain attack vector. An attacker can register the hallucinated name with malicious code.',
        icon: 'ri-ghost-line'
      }
    ],

    // Architecture
    architectureDiagram: null,

    // Solution Stack
    stack: {
      core: ['TypeScript (strict mode)', 'Node.js 18+ built-ins only', 'Zero runtime dependencies'],
      protocol: ['MCP (Model Context Protocol)', 'JSON-RPC 2.0 over stdio'],
      security: ['npm Registry API', 'GitHub Advisory Database', 'CVSS scoring', 'Levenshtein distance', '18+ malware patterns', 'CycloneDX 1.6 SBOM'],
      testing: ['node:test (built-in)', '298 offline tests', 'Mock fetch injection']
    },

    // Code Example
    codeLanguage: 'typescript',
    codeDescription: 'The guard function: pre-install check that verifies package existence, detects typosquatting, and runs a quick audit before allowing installation.',
    codeExample: `// Pre-install guardian: the core of depguard's prevention layer
async function guard(packageName: string, options: GuardOptions): Promise<GuardResult> {
  const reasons: string[] = []
  let decision: 'allow' | 'warn' | 'block' = 'allow'

  // Step 1: Does this package even exist? (AI hallucination guard)
  const verifyResult = await verify(packageName)
  if (!verifyResult.exists) {
    return { decision: 'block', reasons: ['Package does not exist on npm'] }
  }

  // Step 2: Is it a typosquat? (Levenshtein against 100+ popular packages)
  if (verifyResult.possibleTyposquat) {
    reasons.push('Possible typosquat of: ' + verifyResult.similarTo.join(', '))
    decision = 'warn'
  }

  // Step 3: Quick audit + score
  const [auditReport, scoreReport] = await Promise.all([
    audit(packageName, targetLicense, fetcher),
    score(packageName, { targetLicense, fetcher }),
  ])

  // Critical vulns = automatic block. No exceptions.
  if (auditReport.vulnerabilities.critical > 0) {
    decision = 'block'
  }

  // Score below threshold = warn or block
  if (scoreReport.total < threshold - 20) decision = 'block'
  else if (scoreReport.total < threshold) decision = 'warn'

  return { decision, score: scoreReport.total, reasons, auditSummary }
}`,

    // Key Technical Decisions
    keyDecisions: [
      {
        decision: 'Zero runtime dependencies',
        rationale: 'A security tool cannot be a supply chain risk itself. Using only Node.js built-ins (fetch, crypto, readline, fs) eliminates the attack surface entirely.',
        tradeoff: 'More code to write (custom semver parser, MCP protocol handler, disk cache), but the trust factor is worth it.'
      },
      {
        decision: 'Security ceiling on scoring',
        rationale: 'Initial scoring allowed popular packages with critical vulnerabilities to score above 60 (installable). A package with 1 critical vuln could score 66/100 because other dimensions compensated. Fixed by adding a hard ceiling: critical = max 30, high = max 50.',
        tradeoff: 'Some legitimate packages with known-but-mitigated vulns get low scores, but false safety is worse than false alarms.'
      },
      {
        decision: 'Conservative sweep (when in doubt, stay silent)',
        rationale: 'Dead dependency detection could recommend removing packages that are actually used in ways static analysis cannot detect (dynamic imports, CI scripts, config files). Solution: classify uncertain cases as "maybe-unused" and always include a safety note.',
        tradeoff: 'Lower recall (some truly unused deps are marked as maybe-unused), but zero risk of recommending removal of critical dependencies.'
      }
    ],

    // Results & Metrics
    metrics: [
      { value: '12', label: 'MCP Tools' },
      { value: '0', label: 'Runtime Dependencies' },
      { value: '298', label: 'Offline Tests' },
      { value: '~99%', label: 'Token Savings per Audit' },
      { value: '25+', label: 'License Types' },
      { value: '100+', label: 'Typosquat Watchlist' }
    ],

    businessImpact: `depguard saves approximately 11,000 tokens per package audit compared to manual AI research (WebSearch + WebFetch + reasoning). For a typical project with 30 dependencies, that is 330,000 tokens saved in a single project audit. Published on npm as depguard-cli, with a dedicated product page at depguard.dev. The tool is used as an MCP server integrated directly into AI coding workflows.`,

    technicalWins: [
      'Dual advisory sources (npm + GitHub) catch vulnerabilities that single-source tools miss',
      'Levenshtein-based typosquatting detection against 100+ popular packages with zero false positives on exact matches',
      'Dead dependency detection with awareness of config files, npm scripts, peer deps, workspaces, Vue/Svelte/Astro files, and SCSS imports',
      'CVSS score integration for granular security assessment beyond simple severity labels',
      'Dual license parsing handles SPDX expressions like MIT OR GPL-3.0 correctly',
      'CycloneDX 1.6 SBOM generation with PURLs, SHA-512 integrity hashes, and inline VEX vulnerability data. output validates against the official schema and is consumed unchanged by Dependency-Track, Trivy, Grype, OWASP DT',
      'Static code analysis: tarball download + 18+ malware pattern scan catches obfuscation and behavioral mismatches before install',
      'AI Code Review tool surfaces debris left by AI agents (rogue console.logs, empty catches, broken imports, orphan files)',
      'All 298 tests run offline with mock fetch. Zero flaky network tests in CI'
    ],

    // Key Learnings
    learnings: [
      'The best tools are born from real frustration. depguard started as a token-saving hack and became a security platform because the problem kept expanding.',
      'Scoring algorithms must have hard ceilings for critical dimensions. Weighted averages allow bad scores in one dimension to be masked by good scores in others. Security cannot be averaged away.',
      'Static analysis will always have blind spots (dynamic imports, CI-only deps). The right approach is not to pretend you catch everything, but to clearly communicate what you verified and what you did not.',
      'Zero dependencies is not just a feature. It is a trust signal. When your tool audits other packages for supply chain risks, having your own dependency tree undermines credibility.',
      'AI agents hallucinate package names. This is not a theoretical risk. It is a documented supply chain attack vector. Verifying package existence before install is a simple check with outsized impact.',
      'Advisory databases disagree. npm and GitHub report different vulnerabilities for the same package. Deduplication by CVE ID + GHSA ID + URL is essential to avoid double-counting.'
    ],

    // Technologies (for SEO)
    technologies: [
      'TypeScript', 'Node.js', 'MCP', 'Model Context Protocol', 'JSON-RPC',
      'npm', 'GitHub Advisory Database', 'CVSS', 'Levenshtein', 'semver',
      'Claude Code', 'Cursor', 'Windsurf', 'Apache-2.0'
    ],

    // Translations
    translations: {
      pt: {
        title: 'depguard - Servidor de Segurança MCP para Agentes de IA',
        subtitle: 'Como uma experiência para poupar tokens se tornou numa ferramenta open-source de segurança npm',
        context: `Uso o Claude Code diariamente como companheiro de desenvolvimento. Uma coisa que notei rapidamente: os agentes de IA gastam tokens a uma velocidade enorme quando pesquisam pacotes npm. Cada vez que o agente precisa de decidir se deve instalar uma dependência, corre WebSearch, lê a página do npm, verifica vulnerabilidades, compara alternativas. Facilmente 10.000+ tokens por decisão de pacote. Pensei: e se pudesse dar ao agente uma única ferramenta que responde a todas essas perguntas numa só chamada? Essa foi a primeira semente do depguard, um servidor MCP simples que audita pacotes npm e poupa tokens. Mas depois aconteceu algo que mudou a direção do projeto.`,
        challenges: [
          {
            title: 'Custo em Tokens da Pesquisa Manual',
            description: 'Cada decisão sobre um pacote npm custava ao agente de IA 10.000+ tokens em pesquisas web, leitura de páginas e raciocínio. Multiplicado por dezenas de instalações por sessão.',
            icon: 'ri-coin-line'
          },
          {
            title: 'Incidente de Ataque à Supply Chain',
            description: 'Um pacote npm amplamente usado de que eu dependia tinha uma vulnerabilidade crítica num range de versão específico. Foi reportada no GitHub Advisory mas não no npm audit. Percebi que os agentes de IA instalam pacotes cegamente sem verificar múltiplas fontes.',
            icon: 'ri-shield-cross-line'
          },
          {
            title: 'Nomes de Pacotes Alucinados pela IA',
            description: 'Os agentes de IA por vezes sugerem nomes de pacotes que não existem no npm. Estes nomes fantasma são um vetor real de ataque. Um atacante pode registar o nome alucinado com código malicioso.',
            icon: 'ri-ghost-line'
          }
        ],
        stack: {
          core: ['TypeScript (strict mode)', 'Node.js 18+ apenas built-ins', 'Zero dependências runtime'],
          protocol: ['MCP (Model Context Protocol)', 'JSON-RPC 2.0 sobre stdio'],
          security: ['npm Registry API', 'GitHub Advisory Database', 'CVSS scoring', 'Distância de Levenshtein', '18+ padrões de malware', 'CycloneDX 1.6 SBOM'],
          testing: ['node:test (built-in)', '298 testes offline', 'Mock fetch injection']
        },
        keyDecisions: [
          {
            decision: 'Zero dependências runtime',
            rationale: 'Uma ferramenta de segurança não pode ser ela própria um risco de supply chain. Usar apenas built-ins do Node.js elimina a superfície de ataque.',
            tradeoff: 'Mais código para escrever (parser semver, handler MCP, cache em disco), mas o fator confiança compensa.'
          },
          {
            decision: 'Teto de segurança no scoring',
            rationale: 'O scoring inicial permitia que pacotes populares com vulnerabilidades críticas pontuassem acima de 60. Corrigido com um teto: crítico = máx 30, alto = máx 50.',
            tradeoff: 'Alguns pacotes legítimos com vulns conhecidas ficam com scores baixos, mas falsa segurança é pior que falsos alarmes.'
          },
          {
            decision: 'Sweep conservador (na dúvida, silêncio)',
            rationale: 'A deteção de dependências mortas podia recomendar remover pacotes usados de formas que a análise estática não deteta. Solução: classificar casos incertos como "talvez não usado".',
            tradeoff: 'Menor recall, mas zero risco de recomendar remoção de dependências críticas.'
          }
        ],
        businessImpact: `O depguard poupa aproximadamente 11.000 tokens por auditoria de pacote comparado com pesquisa manual do agente de IA. Para um projeto típico com 30 dependências, são 330.000 tokens poupados numa única auditoria. Publicado no npm como depguard-cli, com página dedicada em depguard.dev.`,
        technicalWins: [
          'Fontes duais de advisories (npm + GitHub) apanham vulnerabilidades que ferramentas de fonte única não detetam',
          'Deteção de typosquatting baseada em Levenshtein contra 100+ pacotes populares',
          'Deteção de dependências mortas com awareness de config files, npm scripts, peer deps, workspaces, ficheiros Vue/Svelte/Astro e imports SCSS',
          'Integração CVSS para avaliação de segurança granular além de labels de severidade',
          'Parsing de licenças duais para expressões SPDX como MIT OR GPL-3.0',
          'Geração de SBOM CycloneDX 1.6 com PURLs, hashes de integridade SHA-512 e dados VEX inline. output válido contra o schema oficial, consumido directamente pelo Dependency-Track, Trivy, Grype e OWASP DT',
          'Análise estática de código: download de tarball + scan a 18+ padrões de malware deteta ofuscação e mismatches comportamentais antes da instalação',
          'Ferramenta AI Code Review identifica detritos deixados por agentes de IA (console.logs em produção, catches vazios, imports partidos, ficheiros órfãos)',
          'Todos os 298 testes correm offline com mock fetch. Zero testes flaky no CI'
        ],
        learnings: [
          'As melhores ferramentas nascem de frustração real. O depguard começou como um hack para poupar tokens e tornou-se numa plataforma de segurança porque o problema continuou a crescer.',
          'Algoritmos de scoring devem ter tetos para dimensões críticas. Médias ponderadas permitem que scores maus numa dimensão sejam mascarados por scores bons noutras. A segurança não pode ser mediada.',
          'A análise estática terá sempre pontos cegos. A abordagem correta não é fingir que se apanha tudo, mas comunicar claramente o que se verificou e o que não.',
          'Zero dependências não é apenas uma feature. É um sinal de confiança. Quando a tua ferramenta audita outros pacotes por riscos de supply chain, ter a tua própria árvore de dependências mina a credibilidade.',
          'Os agentes de IA alucinam nomes de pacotes. Verificar a existência antes de instalar é uma verificação simples com impacto enorme.',
          'As bases de dados de advisories discordam. O npm e o GitHub reportam vulnerabilidades diferentes para o mesmo pacote. Deduplicação por CVE ID + GHSA ID + URL é essencial.'
        ]
      }
    }
  },

  'quantum-elliott-wave-trading-ai': {
    id: 'quantum-elliott-wave-trading-ai',
    slug: 'quantum-elliott-wave-trading-ai',
    title: 'Quantum Elliott Wave AI — Autonomous Crypto Trading Platform',
    subtitle: 'Personal R&D project — an ML and quantum-inspired trading system that classifies Elliott Wave stages, requires multi-timeframe confluence, and adapts position sizing on live Binance markets',

    // SEO Meta
    metaTitle: 'Case Study: Quantum Elliott Wave AI Trading Platform | Jorge Morais',
    metaDescription: 'A personal R&D platform combining ML Elliott Wave classification, Hurst exponent regime detection, multi-timeframe confluence, and quantum-inspired portfolio optimization. Python + TypeScript + Node.js, live on Binance.',

    // Hero
    heroImage: require('@/data/projects/images/qscope-v3/dashboard.png'),
    tech: ['Python 3.13', 'TypeScript', 'Node.js 18', 'Scikit-learn', 'TA-Lib', 'NumPy', 'SQLite', 'Binance API'],
    duration: '6 months (MVP + ongoing iterations)',
    role: 'Sole author — architecture, ML, backend, deployment',
    year: '2025',

    // Context
    context: `Cryptocurrency markets run 24/7 with extreme volatility, and traditional technical analysis tends to fail there because it treats price as a random walk and ignores the fractal, regime-shifting microstructure of those markets. I wanted to push a single-developer system as far as I could in that domain: build an autonomous platform that understands the regime via quantitative measures (Hurst exponent, fractal dimension), classifies Elliott Wave stages with machine learning rather than human eyeballs, requires multi-timeframe confluence before acting, and optimizes position sizing adaptively. This is a personal R&D project, not a client engagement. It runs live on Binance with small real signed orders so the feedback loop is real market data and real fills, not paper trading. All metrics below are backtested or observed on this same project — they are not client outcomes.`,

    // Technical Challenges
    challenges: [
      {
        title: 'Objective Elliott Wave classification',
        description: 'Elliott Wave is famously subjective — different analysts label different waves on the same chart. The system needed reproducible wave identification with a confidence score, not human judgement calls.',
        icon: 'ri-wave-line'
      },
      {
        title: 'Regime detection beyond ADX',
        description: 'Markets alternate between persistent (trending) and mean-reverting regimes. A trend-following strategy that runs in a mean-reverting regime bleeds capital. ADX alone is too noisy.',
        icon: 'ri-flashlight-line'
      },
      {
        title: 'Single-timeframe false positives',
        description: 'Signals from one timeframe produce ~40% false positives in observed runs. Real opportunities only show up when 5m, 15m, 1h, and 4h all align — but combining them naively is just as noisy.',
        icon: 'ri-time-line'
      },
      {
        title: 'Position sizing as a first-class problem',
        description: 'Fixed position sizing (e.g., always 5%) ignores signal quality, market regime, and Elliott Wave stage. It under-sizes the best entries and over-sizes the worst ones.',
        icon: 'ri-shield-check-line'
      }
    ],

    // Architecture
    architectureDiagram: null,

    // Solution Stack
    stack: {
      ai: ['Python 3.13', 'NumPy', 'Pandas', 'Scikit-learn (HistGradientBoosting, MLPClassifier, ExtraTreesRegressor)', 'TA-Lib', 'SciPy'],
      quantum: ['Hurst exponent analyzer', 'Fractal dimension calculator', 'Quantum superposition engine', 'Interference amplifier'],
      backend: ['TypeScript', 'Node.js 18', 'SQLite trade history', 'Binance WebSocket API'],
      deployment: ['PM2 process manager', 'Python subprocess bridge', 'Real-time WebSocket streaming, 24/7 operation']
    },

    // Code Example
    codeLanguage: 'python',
    codeDescription: 'Wave 2 entry analysis — the highest-probability long entry in the model. Combines Hurst-based mean-reversion check, volume confirmation, wave progress validation, and ML confidence scoring before producing a structured trade decision with stop loss and tiered take-profits.',
    codeExample: `def _analyze_wave_2_entry(self, elliott_context, quantum_data, price) -> Dict:
    """
    Wave 2 analysis — best long opportunity in the impulsive 1-5 sequence.

    Wave 2 characteristics we look for:
      - Mean reversion (Hurst < 0.45)
      - Fibonacci retracement zone (38.2% - 61.8% of Wave 1)
      - Declining volume vs Wave 1
      - RSI recovering from oversold
    """
    confidence = 0.6
    reasoning, warnings = [], []

    # Hurst confirms mean-reversion regime — a Wave 2 should pull back, not trend.
    if quantum_data.hurst_exponent < 0.45:
        confidence += 0.2
        reasoning.append("Hurst < 0.45: mean-reversion regime confirmed")
    else:
        warnings.append("Hurst not showing mean reversion")

    # Volume floor: a healthy Wave 2 retraces with declining but non-trivial volume.
    if quantum_data.volume_quantum > 0.8:
        confidence += 0.1
        reasoning.append("Volume above support floor")

    # Wave progress: ideal Wave 2 zone is 50-80% of expected retracement.
    if 0.5 < elliott_context.wave_progress < 0.8:
        confidence += 0.2
        reasoning.append(f"Wave 2 at {elliott_context.wave_progress:.1%} — ideal entry zone")
    else:
        warnings.append("Wave 2 outside ideal zone")

    # Decision: only fire when conviction crosses 0.7. Below that, wait.
    if confidence > 0.7:
        return {
            'decision':       'BUY',
            'action_type':    'CONSERVATIVE',
            'confidence':     confidence,
            'reasoning':      reasoning,
            'warnings':       warnings,
            'opportunity_score': 85,
            'position_size':  4.0,                     # Wave 2 allows larger position
            'stop_loss':      price * 0.97,            # 3% below entry
            'take_profits':   [(price * 1.08, 50.0),   # 50% out at 8% gain
                               (price * 1.15, 50.0)],  # remainder at 15%
        }
    return {'decision': 'WAIT', 'confidence': confidence, 'warnings': warnings}`,

    // Key Technical Decisions
    keyDecisions: [
      {
        decision: 'Hurst exponent as the primary regime classifier',
        rationale: 'Hurst > 0.6 means persistence (momentum strategies work). Hurst < 0.4 means mean reversion (contrarian strategies work). Backtests showed ~87% regime classification accuracy versus ~60% for ADX alone.',
        tradeoff: 'More expensive to compute than ADX, and needs a sufficient lookback window to be stable. Worth it — the regime label drives every downstream decision.'
      },
      {
        decision: 'ML-classified Elliott Waves over rule-based detection',
        rationale: 'Rule-based wave detection inherits the subjectivity of the analyst who wrote the rules. A HistGradientBoostingClassifier trained on Hurst, momentum, volume, and fractal dimension produces objective, reproducible wave labels with calibrated confidence.',
        tradeoff: 'Requires labeled training data and periodic retraining as market microstructure shifts. Replaceable when (and if) labels degrade — the rest of the pipeline does not assume any particular classifier.'
      },
      {
        decision: 'Quantum superposition for portfolio sizing',
        rationale: 'The optimizer evaluates 16 candidate position sizes simultaneously and amplifies high-Sharpe candidates via an interference step (energy = 0.4·Sharpe + 0.3·confidence + Kelly term). Adapts to Elliott Wave stage (Wave 3: 1.5x, Wave 5: 0.7x and veto).',
        tradeoff: 'More CPU per signal than fixed sizing, but it removes a whole category of bad trades — over-sized Wave 5 entries are particularly damaging, and fixed sizing has no way to avoid them.'
      },
      {
        decision: 'Multi-timeframe confluence as a hard filter (not a tiebreaker)',
        rationale: 'The system requires confluence ≥ 0.3 across 5m/15m/1h/4h before any trade fires. Confluence is computed from momentum alignment, EMA bias direction, and a count of agreeing timeframes. Reduces trade frequency by ~60% but increases observed win rate from 48% to 65%+.',
        tradeoff: 'Lower trade count means slower compounding in calm markets. Acceptable trade — surviving drawdowns matters more than being maximally active.'
      }
    ],

    // Results & Metrics (backtested / observed on this project — not client outcomes)
    metrics: [
      { value: '65-72%', label: 'Win rate (backtest)' },
      { value: '2.1', label: 'Sharpe ratio' },
      { value: '8.3%', label: 'Max drawdown' },
      { value: '<200ms', label: 'Multi-TF analysis' },
      { value: '12', label: 'Quantum indicators / signal' },
      { value: '24/7', label: 'Autonomous operation' }
    ],

    businessImpact: `The platform runs unattended 24/7 against live Binance markets, signing real (small) orders to keep the feedback loop honest. End-to-end signal generation — from raw candle ingestion through Hurst regime classification, ML wave labeling, multi-timeframe confluence, and quantum portfolio sizing — completes in under 200ms per pair. Defensive vetoes (Wave 5, corrective patterns, chaotic regimes via fractal dimension > 1.7) account for more of the realized edge than any single offensive component, which is the most useful lesson the project produced. As a portfolio piece this case demonstrates the ability to design and ship a polyglot, ML-driven, real-time system end-to-end as a single developer — from market data plumbing to model training to live execution.`,

    technicalWins: [
      'Hurst-exponent-driven regime detection: ~87% classification accuracy vs ~60% for ADX-only baselines on the same data.',
      'ML Elliott Wave classification (HistGradientBoosting on quantum features) eliminates analyst subjectivity and produces calibrated confidence scores.',
      'Multi-timeframe confluence filter cuts false positives by ~60% and lifts observed win rate from 48% to 65%+.',
      'Quantum-inspired portfolio optimizer adapts position size to wave stage and signal quality, materially improving Sharpe (2.1 vs 1.3 with fixed sizing on the same backtest set).',
      'Defensive veto layer (Wave 5, corrective A/B/C, fractal dimension > 1.7) prevented a measurable share of would-be losses across backtests.',
      'Sub-200ms multi-timeframe analysis on commodity hardware enables low-latency trade execution.',
      'Polyglot architecture (Python ML core + TypeScript/Node.js orchestration + SQLite persistence) cleanly separated by concern, communicating over a subprocess bridge — no stack-internal lock-in.',
      'Robust error handling and reconnection across Binance WebSocket disconnects, partial fills, and data gaps — required for unattended 24/7 operation.'
    ],

    // Key Learnings
    learnings: [
      'Defensive rules outperformed offensive rules. The veto layer (Wave 5, corrective waves, chaotic regimes) prevented more loss than any optimization improved gain.',
      'Position sizing is as important as entry. Fixed sizing under-funds the best setups and over-funds the worst — the asymmetry is large enough to dominate medium-term P&L.',
      'Single-timeframe signals lie. Demanding alignment across 5m/15m/1h/4h is an unglamorous filter that did more for win rate than any model upgrade.',
      'Hurst exponent and fractal dimension are doing real work that ADX and ATR are not. The cost is more compute and more parameters; the win is a regime label that downstream decisions can actually trust.',
      'ML confidence scoring is not optional in production. Every signal carries a wave-level confidence and an overall confidence — low-confidence signals get smaller size or no trade at all.',
      '24/7 autonomous systems force you to take edge cases seriously. API failures, partial fills, gapped candles, daylight-saving timestamps — the system has to survive all of them without a human in the loop.',
      'A polyglot stack is fine when boundaries are clean. Python for ML, TypeScript/Node for orchestration, SQLite for state — each chosen because it was the right tool for that layer, not because the stack pretends to be uniform.'
    ],

    // Technologies (for SEO)
    technologies: [
      'Python', 'TypeScript', 'Node.js', 'Scikit-learn', 'TA-Lib', 'NumPy', 'Pandas', 'SciPy',
      'Machine Learning', 'Hurst Exponent', 'Fractal Dimension', 'Elliott Wave',
      'Quantum-Inspired Algorithms', 'Multi-Timeframe Analysis', 'Kelly Criterion',
      'Algorithmic Trading', 'Binance API', 'WebSocket', 'SQLite', 'PM2'
    ],

    // Translations
    translations: {
      pt: {
        title: 'Quantum Elliott Wave AI — Plataforma Autónoma de Trading de Cripto',
        subtitle: 'Projeto pessoal de I&D — sistema de trading com ML e algoritmos de inspiração quântica que classifica fases Elliott Wave, exige confluência multi-timeframe, e ajusta o sizing dinamicamente em mercados Binance ao vivo',
        context: `Os mercados de cripto correm 24/7 com volatilidade extrema e a análise técnica clássica falha porque trata o preço como random walk e ignora a microestrutura fractal e mutável dos mercados. Quis empurrar até onde dava um sistema construído por um único developer: uma plataforma autónoma que entende o regime do mercado por medidas quantitativas (expoente de Hurst, dimensão fractal), classifica fases Elliott Wave com machine learning em vez de olho humano, exige confluência entre múltiplos timeframes antes de agir, e optimiza o sizing de forma adaptativa. É um projeto pessoal de I&D, não um engagement de cliente. Corre ao vivo na Binance com ordens reais (pequenas) assinadas, para que o feedback loop seja mercado real e fills reais, não paper trading. Todas as métricas abaixo são backtested ou observadas neste mesmo projeto — não são resultados de cliente.`,
        challenges: [
          {
            title: 'Classificação Elliott Wave objetiva',
            description: 'Elliott Wave é notoriamente subjetiva — analistas diferentes etiquetam ondas diferentes no mesmo gráfico. Era preciso identificação reproduzível com score de confiança, não juízo humano.',
            icon: 'ri-wave-line'
          },
          {
            title: 'Detecção de regime para além do ADX',
            description: 'Os mercados alternam entre persistente (em tendência) e reversão à média. Uma estratégia trend-following num regime de reversão à média sangra capital. ADX sozinho é demasiado ruidoso.',
            icon: 'ri-flashlight-line'
          },
          {
            title: 'Falsos positivos de timeframe único',
            description: 'Sinais de um único timeframe produzem ~40% de falsos positivos nas corridas observadas. Oportunidades reais aparecem quando 5m, 15m, 1h e 4h alinham — combiná-los ingenuamente é igualmente ruidoso.',
            icon: 'ri-time-line'
          },
          {
            title: 'Sizing como problema de primeira classe',
            description: 'Sizing fixo (sempre 5%) ignora qualidade do sinal, regime, e fase Elliott Wave. Sub-financia as melhores entradas e sobre-financia as piores.',
            icon: 'ri-shield-check-line'
          }
        ],
        stack: {
          ai: ['Python 3.13', 'NumPy', 'Pandas', 'Scikit-learn (HistGradientBoosting, MLPClassifier, ExtraTreesRegressor)', 'TA-Lib', 'SciPy'],
          quantum: ['Analisador de expoente de Hurst', 'Calculador de dimensão fractal', 'Motor de superposição quântica', 'Amplificador de interferência'],
          backend: ['TypeScript', 'Node.js 18', 'Histórico de trades em SQLite', 'Binance WebSocket API'],
          deployment: ['Gestor de processos PM2', 'Bridge Python via subprocess', 'Streaming WebSocket em tempo real, operação 24/7']
        },
        keyDecisions: [
          {
            decision: 'Expoente de Hurst como classificador de regime principal',
            rationale: 'Hurst > 0.6 indica persistência (estratégias de momentum funcionam). Hurst < 0.4 indica reversão à média (contrárias funcionam). Os backtests mostraram ~87% de precisão vs ~60% só com ADX.',
            tradeoff: 'Mais caro de calcular que ADX e precisa de janela suficiente para estabilizar. Vale a pena — o label de regime conduz todas as decisões a jusante.'
          },
          {
            decision: 'Elliott Waves classificadas por ML em vez de regras',
            rationale: 'Detecção baseada em regras herda a subjetividade do analista que escreveu as regras. Um HistGradientBoostingClassifier treinado em Hurst, momentum, volume e dimensão fractal produz labels objetivas, reproduzíveis e com confiança calibrada.',
            tradeoff: 'Precisa de dados rotulados e re-treino periódico à medida que a microestrutura muda. Substituível quando os labels degradam — o resto da pipeline não depende do classificador concreto.'
          },
          {
            decision: 'Superposição quântica para sizing de portfolio',
            rationale: 'O otimizador avalia 16 candidatos de tamanho simultaneamente e amplifica os de Sharpe alto via interferência (energia = 0.4·Sharpe + 0.3·confiança + termo de Kelly). Adapta-se à fase Elliott (Wave 3: 1.5x, Wave 5: 0.7x e veto).',
            tradeoff: 'Mais CPU por sinal que sizing fixo, mas elimina toda uma categoria de trades maus — entradas em Wave 5 sobre-dimensionadas são especialmente destrutivas e sizing fixo não tem como as evitar.'
          },
          {
            decision: 'Confluência multi-timeframe como filtro forte (não desempate)',
            rationale: 'O sistema exige confluência ≥ 0.3 entre 5m/15m/1h/4h antes de qualquer trade. A confluência combina alinhamento de momentum, direção de viés EMA, e contagem de timeframes em concordância. Reduz frequência de trades em ~60% mas aumenta o win rate observado de 48% para 65%+.',
            tradeoff: 'Menos trades significam compounding mais lento em mercados calmos. Aceitável — sobreviver a drawdowns importa mais que estar maximamente ativo.'
          }
        ],
        businessImpact: `A plataforma corre 24/7 sem supervisão contra mercados Binance ao vivo, assinando ordens reais (pequenas) para manter o feedback loop honesto. A geração end-to-end de sinal — desde a ingestão de candles até classificação de regime via Hurst, labeling de wave por ML, confluência multi-timeframe e sizing de inspiração quântica — completa em menos de 200ms por par. Os vetos defensivos (Wave 5, padrões corretivos A/B/C, regimes caóticos via dimensão fractal > 1.7) explicam mais do edge realizado do que qualquer componente ofensivo, que é a lição mais útil que o projeto produziu. Como peça de portfolio, demonstra capacidade de desenhar e entregar um sistema poliglota, em tempo real e baseado em ML, end-to-end como developer único — desde o pipe de dados ao treino do modelo à execução ao vivo.`,
        technicalWins: [
          'Detecção de regime via Hurst: ~87% de precisão de classificação vs ~60% para baselines só com ADX nos mesmos dados.',
          'Classificação Elliott Wave por ML (HistGradientBoosting sobre features quânticas) elimina subjetividade e produz scores de confiança calibrados.',
          'Filtro de confluência multi-timeframe corta falsos positivos em ~60% e eleva o win rate observado de 48% para 65%+.',
          'Otimizador de portfolio de inspiração quântica adapta o sizing à fase de wave e qualidade do sinal, melhorando Sharpe materialmente (2.1 vs 1.3 com sizing fixo no mesmo conjunto de backtests).',
          'Camada defensiva de veto (Wave 5, A/B/C corretivas, dimensão fractal > 1.7) preveniu uma fatia mensurável de perdas potenciais nos backtests.',
          'Análise multi-timeframe em sub-200ms em hardware comum permite execução de baixa latência.',
          'Arquitetura poliglota (Python para ML core + TypeScript/Node.js para orquestração + SQLite para persistência) limpa por preocupação, comunicando via subprocess — sem lock-in interno de stack.',
          'Tratamento de erro e reconexão robustos para desconexões WebSocket Binance, fills parciais e gaps de dados — necessários para operação 24/7 sem supervisão.'
        ],
        learnings: [
          'Regras defensivas superaram ofensivas. A camada de veto (Wave 5, corretivas, regimes caóticos) preveniu mais perda do que qualquer otimização melhorou ganho.',
          'Sizing é tão importante como entrada. Sizing fixo sub-financia os melhores setups e sobre-financia os piores — a assimetria é grande o suficiente para dominar o P&L de médio prazo.',
          'Sinais de timeframe único mentem. Exigir alinhamento entre 5m/15m/1h/4h é um filtro pouco glamoroso que fez mais pelo win rate que qualquer upgrade de modelo.',
          'O expoente de Hurst e a dimensão fractal estão a fazer trabalho real que o ADX e o ATR não fazem. O custo é mais compute e mais parâmetros; o ganho é um label de regime no qual as decisões a jusante podem confiar.',
          'O scoring de confiança ML não é opcional em produção. Cada sinal carrega confiança ao nível da wave e confiança global — sinais de baixa confiança recebem sizing menor ou nenhum trade.',
          'Sistemas autónomos 24/7 forçam-te a levar edge cases a sério. Falhas de API, fills parciais, candles em falta, timestamps de horário de verão — o sistema tem de sobreviver a tudo sem humano no loop.',
          'Uma stack poliglota está bem quando as fronteiras são limpas. Python para ML, TypeScript/Node para orquestração, SQLite para estado — cada uma escolhida por ser a ferramenta certa para essa camada.'
        ]
      }
    }
  }

};

/**
 * Get case study by slug
 * @param {string} slug - Case study slug
 * @param {string} language - Language code ('en' or 'pt')
 * @returns {Promise<Object|null>} Case study data or null if not found
 */
export async function getCaseStudy(slug, language = 'pt') {
  // Simulate async operation (could be API call in future)
  return new Promise((resolve) => {
    setTimeout(() => {
      const caseStudy = Object.values(caseStudies).find(cs => cs.slug === slug);

      if (!caseStudy) {
        resolve(null);
        return;
      }

      // If case study has translations, use the appropriate one
      if (caseStudy.translations && caseStudy.translations[language]) {
        const translation = caseStudy.translations[language];
        resolve({ ...caseStudy, ...translation });
      } else {
        // Fallback to default (English)
        resolve(caseStudy);
      }
    }, 100);
  });
}

/**
 * Get all case studies
 * @returns {Promise<Array>} Array of all case studies
 */
export async function getAllCaseStudies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.values(caseStudies));
    }, 100);
  });
}

/**
 * Check if project has case study
 * @param {string} projectId - Project ID
 * @returns {boolean} True if case study exists
 */
export function hasCaseStudy(projectId) {
  return Object.prototype.hasOwnProperty.call(caseStudies, projectId);
}

export default caseStudies;
